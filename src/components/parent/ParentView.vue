<template>
  <div >
    <div class="pagetitle">
      <h1>Parent Registration</h1>
    </div><!-- End Page Title -->
    <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"></h5>

              <!-- Horizontal Form -->
              
              <form>
                <div class="row mb-3">
                  <label for="inputFirstName" class="col-sm-2 col-form-label">First Name</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputFirstName" v-model="parentRequest.firstName">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputLastName" class="col-sm-2 col-form-label">Last Name</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputLastName" v-model="parentRequest.lastName">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputAddress" class="col-sm-2 col-form-label">Address</label>
                  <div class="col-sm-3">
                    <input type="text" class="form-control" id="inputUnit" placeholder="Unit Number" v-model="parentRequest.unit">
                  </div>
                  <div class="col-sm-3">
                    <input type="text" class="form-control" id="inputBuliding" placeholder="Buliding Number" v-model="parentRequest.building">
                  </div>
                  <div class="col-sm-3">
                    <input type="text" class="form-control" id="inputStreet" placeholder="Street" v-model="parentRequest.street">
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-sm-2 col-form-label"></label>
                  <div class="col-sm-3">
                    <input type="text" class="form-control" id="inputCity" placeholder="City" v-model="parentRequest.city">
                  </div>
                  <div class="col-md-3">
                    <select id="inputProvince" class="form-select" v-model="parentRequest.province">
                      <option selected>Select Province</option>
                      <option value="AB">Alberta</option>
                      <option value="BC">British Columbia</option>
                      <option value="MB">Manitoba</option>
                      <option value="NB">New Brunswick</option>
                      <option value="NL">Newfoundland and Labrador</option>
                      <option value="NS">Nova Scotia</option>
                      <option value="NT">Northwest Territories</option>
                      <option value="NU">Nunavut</option>
                      <option value="ON">Ontario</option>
                      <option value="PE">Prince Edward Island</option>
                      <option value="QC">Quebec</option>
                      <option value="SK">Saskatchewan</option>
                      <option value="YT">Yukon</option>
                    </select>
                  </div>
                  <div class="col-sm-3">
                    <input type="text" class="form-control" id="inputPostalCode" placeholder="Postal Code" v-model="parentRequest.postalCode">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPhone" v-model="parentRequest.phone">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail" v-model="parentRequest.email">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmergencyContactName" class="col-sm-2 col-form-label">Emergency Contact Name</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmergencyContactName" v-model="parentRequest.emergencyContactName">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmergencyContactPhone" class="col-sm-2 col-form-label">Emergency Contact Phone</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmergencyContactPhone" v-model="parentRequest.emergencyContactPhone">
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary form-buttons" @click="register">Submit</button>
                  <button type="reset" class="btn btn-secondary">Reset</button>
                </div>
              </form><!-- End Horizontal Form -->

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import ParentService from "@/services/ParentService";

export default {
  name: "ParentView",
  data() {           
      return {
          parentRequest: { id:0, firstName: "", lastName: "", unit: "", building: "", street: "", city: "", province: "", postalCode: "", phone: "", email: "", 
                                  emergencyContactName: "", emergencyContactPhone: "", userId: 0 },
          message: ""
      };
  },
  methods: {
    register(event) {
          event.preventDefault();
          let user = this.$util.getUser();
          console.log(user);
          if(user && this.parentRequest.firstName && this.parentRequest.lastName){
            this.parentRequest.userId = user.id;
            if (this.parentRequest.id === 0){
              ParentService.create(this.parentRequest)
              .then(response => {
                  let parent = response.data;
                  this.$util.setParent(parent);
                  this.message = parent;
                  this.$util.notify("Successfully saved the parent detail !", "success");
                    this.$util.wait(1000).then(() => {                        
                      this.$router.push({ name: "ChildrenView" });                       
                    })                  
              })
              .catch(error => {
                  this.parentRequest.firstName = "";
                  this.parentRequest.lastName = "";
                  this.parentRequest.address = "";
                  this.parentRequest.phone = "";
                  this.parentRequest.email = "";
                  this.parentRequest.emergencyContactName = "";
                  this.parentRequest.emergencyContactPhone = "";
                  console.log(error.response);
              });
            } else {
              ParentService.update(this.parentRequest.id, this.parentRequest)
              .then(response => {
                  let parent = response.data;
                  this.$util.setParent(parent);
                  this.message = parent;
                  this.$util.notify("Successfully updated the parent detail !", "success");
                    this.$util.wait(1000).then(() => {                        
                      this.$router.push({ name: "ChildrenView" });                       
                    })
              })
              .catch(error => {
                  this.parentRequest.firstName = "";
                  this.parentRequest.lastName = "";
                  this.parentRequest.address = "";
                  this.parentRequest.phone = "";
                  this.parentRequest.email = "";
                  this.parentRequest.emergencyContactName = "";
                  this.parentRequest.emergencyContactPhone = "";
                  console.log(error.response);
              });
            }
            
          }
          
      },

      retreiveParent() {
            let parent = this.$util.getParent();
            console.log(parent);
            if(parent && parent.id){
              ParentService.get(parent.id)
                .then(response => { 
                    this.parentRequest = response.data;
                    console.log(this.parentRequest);
                })
                .catch(error => {
                    console.log(error);
                })
            }
        }
  },
  mounted() {   
    this.retreiveParent();
  }
};
</script>

<style>

</style>
