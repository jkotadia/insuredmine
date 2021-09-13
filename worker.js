const { workerData, parentPort } = require('worker_threads');
const db = require('./db');

(async ()=>{
  for (let row of workerData) {
    try {
      try {
        var user = await db.User({
          userType: row.userType,
          email: row.email,
          gender: row.gender,
          firstname: row.firstname,
          city: row.city,
          phone: row.phone,
          address: row.address,
          state: row.state,
          zip: row.zip,
          dob: row.dob
        }).save();
      } catch (error) {
        var user = await db.User.findOne({
          email: row.email
        });
        // console.log("duplicate user: ",row.email);
      }

      try {
        var carrier = await db.PolicyCarrier({
          company_name: row.company_name
        }).save();
      } catch (error) {
        var carrier = await db.PolicyCarrier.findOne({
          company_name: row.company_name
        });
        // console.log("duplicate carrier: ",row.company_name);
      }

      try {
        var category = await db.PolicyCategory({
          category_name: row.category_name
        }).save();
      } catch (error) {
        var category = await db.PolicyCategory.findOne({
          category_name: row.category_name
        });
        // console.log("duplicate category: ",row.category_name);
      }

      let user_id = user._id;
      let carrier_id = carrier._id;
      let category_id = category._id;

      await db.PolicyInfo({
        policy_number: row.policy_number,
        policy_start_date: row.policy_start_date,
        policy_end_date: row.policy_end_date,
        policy_category_id: category_id,
        policy_carrier_id: carrier_id,
        user_id: user_id
      }).save()

      try {
        await db.Agent({
          agent: row.agent
        }).save();
      } catch (error) {
        // console.log("duplicate agent: ",row.agent);
      }

      try {
        await db.UserAccount({
          account_name: row.account_name
        }).save();          
      } catch (error) {
        // console.log("duplicate user account: ",row.account_name);
      }

    } catch (error) {
      console.log(error);
    }
  }
  parentPort.postMessage({ status: 'completed' });
})()
