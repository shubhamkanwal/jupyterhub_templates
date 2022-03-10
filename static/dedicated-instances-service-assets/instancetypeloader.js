$(document).ready(function() {
  var tabworkloadtype = [];
  $.getJSON("../static/dedicated-instances-service-assets/instancetypes.json", function(data) {

//    alert(data);

    $.each(data, function(index, val) {
      tabworkloadtype[index] = val;
    });
  });

  $('#workloadtype').change(function(event) {
    // alert('workloadtype_change');
    var workloadtype = $(this).val();
    // alert(workloadtype);

    var htmlOption = '';
    if (workloadtype !== '0') {
      var itemsworkloadtype = tabworkloadtype[workloadtype];
      //alert(JSON.stringify(itemsworkloadtype));
      $.each(itemsworkloadtype, function(key, value) {
//        alert("k=" + key + " v=" + JSON.stringify(value));
        htmlOption += '<option value="' + value[1] + '">' + value[1] + " | vCPU : " +  value[2] + " | Memory GiB : " +  value[3] + " | Rate Per Hour: $" + value[4] + '</option>';
      });
    }
    $('#instanceid').html(htmlOption);
  });

  $('#go').click(function() {
    //alert('go_click');
    var selected = $('#instanceid').find('option:selected');
    var href = selected.data('href');
    // alert('Go to: '+href);
    window.location = href;
  });
});