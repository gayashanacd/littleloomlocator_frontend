<template>
  <div>
    <div class="modal fade" id="MoreInfoModal" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Institute 1 | More Information</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="row mb-3">
                    <label for="inputText" class="col-sm-4 col-form-label">Institute Name</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" value="Institute 1" disabled>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputText" class="col-sm-4 col-form-label">Program Name</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" value="Program 1" disabled>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputText" class="col-sm-4 col-form-label">Capacity</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" value="28/40" disabled>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="row mb-3">
                    <label for="inputText" class="col-sm-4 col-form-label">Age Group</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" value="3-5 Years" disabled>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputText" class="col-sm-4 col-form-label">Address</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" value="305, 12th Street, New West, BC, V3G6D4" disabled>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="row mb-3">
                    <label for="inputText" class="col-sm-4 col-form-label">Select Child</label>
                    <div class="col-sm-8">
                      <select id="inputChild" class="form-select">
                        <option selected>Select Child</option>
                        <option value="Melissa_Gin">Melissa Gin</option>
                        <option value="Jack_Gin">Jack Gin</option>
                      </select>
                    </div>
                  </div>
                </div> 
                <div class="col-md-6">
                  <div class="row mb-3">
                    <label for="inputText" class="col-sm-4 col-form-label">Message</label>
                    <div class="col-sm-8">
                      <textarea class="form-control" style="height: 50px"></textarea>
                    </div>
                  </div>
                </div> 
              </div>
            </div>  
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Request for enrollment</button>
          </div>
        </div>
      </div>
    </div>   
  </div>
</template>

<script>

export default {
    name: "RequestMoreInfoModal",
    data() {           
        return {

        };
    },
    methods: {

    },
    mounted() {   

    }
};
</script>

<style>

</style>