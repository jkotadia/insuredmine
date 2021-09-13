const { spawn } = require('child_process');
setTimeout(function(){
    var previousUsage = process.cpuUsage();
    setInterval(function(){
        let usage = process.cpuUsage(previousUsage);
        let percentage = (usage.user + usage.system)*100/1000000;
        process.stdout.write(`(pid:${process.pid}) cpu usage %: ${percentage.toFixed(2)}\r`);
        if(percentage>70){
            console.log(`cpu usage is ${percentage}%,so restarting process...`);
            spawn(process.argv[0], process.argv.slice(1), {
                detached: true,
                stdio: 'inherit'
            }).unref();
            process.exit();
        }
        previousUsage = process.cpuUsage();
    }, 1000);
},2000);
