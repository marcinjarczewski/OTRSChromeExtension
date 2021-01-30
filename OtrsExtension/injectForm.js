InjectHelper ={};
InjectHelper.run = function(clientId, clientName, owner, queue, subject, description, invoiceDescription, startDate, endDate, reportedTime, invoiceTime, closedState){	
function setCaretPosition(elemId, caretPos) {
    var elem = document.getElementById(elemId);

    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}
      $('body').keypress(function(e) {
        console.log(e.which);
      });
    
	
	$("#Subject").val(subject);
	CKEDITOR.instances["RichText"].setData(description);
	$("#DynamicField_TicketInvoiceDescription").val(invoiceDescription);
	
		$("#DynamicField_TicketTimeYear").val(parseInt(startDate.substring(0,5)));
	$("#DynamicField_TicketTimeMonth").val(parseInt(startDate.substring(5,7)));
    $("#DynamicField_TicketTimeDay").val(parseInt(startDate.substring(8,10)));
	$("#DynamicField_TicketTimeHour").val(parseInt(startDate.substring(11,13)));
	$("#DynamicField_TicketTimeMinute").val(parseInt(startDate.substring(14,16)));
	
	$("#DynamicField_ITSMDueDateYear").val(parseInt(endDate.substring(0,5)));
	$("#DynamicField_ITSMDueDateMonth").val(parseInt(endDate.substring(5,7)));
    $("#DynamicField_ITSMDueDateDay").val(parseInt(endDate.substring(8,10)));
	$("#DynamicField_ITSMDueDateHour").val(parseInt(endDate.substring(11,13)));
	$("#DynamicField_ITSMDueDateMinute").val(parseInt(endDate.substring(14,16)));
	
	$("#TimeUnits").val(reportedTime);
	
	if(!invoiceDescription || invoiceDescription.length == 0)
	{
		$('#DynamicField_TicketToInvoice').click();
	}
	else
	{
			$("#DynamicField_TicketInvoiceTime").val(invoiceTime);
	}
	
     var totalTime = 10;
			setTimeout(
	function(){
		$("#FromCustomer").val(clientName);
		 var press = jQuery.Event("keypress");
		 press.ctrlKey = false;
		 press.which = 13;
		  // setTimeout(function(){$("#FromCustomer").focus();}, 200);
		  // setTimeout(function(){$("#FromCustomer").trigger("change");}, 500);
		// setTimeout(function(){ simulate(document.getElementById("FromCustomer"), "click");}, 200);
		    setTimeout(function(){$("#FromCustomer").trigger(press);},200);
		    setTimeout(function(){Core.Agent.CustomerSearch.ReloadCustomerInfo(clientId)},400);
	},totalTime);
	
		totalTime += 1000;
		
	 setTimeout(
		 function(){$("#Dest_Search").focus();
		 $("#Dest_Search").val(queue);
		 setTimeout(function(){
			 if(!$('.jstree-anchor')[0])
				 {$("#Dest_Search").focus();}
		 }, 200);
		 setTimeout(function(){$('.jstree-anchor').click();}, 400);
		 setTimeout(function(){$('.jstree-anchor').click();}, 500);
		 setTimeout(function(){$('.jstree-anchor').click();}, 600);
	 },totalTime);
	
	totalTime += 1000;
	
	
		 setTimeout(
	 function(){
				 $("#NewUserID_Search").focus();	
				 setTimeout(function(){if(!$('.jstree-anchor')[0]){$("#NewUserID_Search").focus();}}, 100);				
				 setTimeout(function(){
					 for (i = 0; i < $('.jstree-anchor').length; i++) {
					   if($('.jstree-anchor')[i].text == owner)
					   {
						 $('.jstree-anchor')[i].click();
						 setTimeout(function(){$('.jstree-anchor')[i].click();}, 200);
						 setTimeout(function(){$('.jstree-anchor')[i].click();}, 300);
						 return;
					   }
					 }
				 }, 300);
	 },totalTime);
	
	totalTime += 1000;
	
		 setTimeout(
	 function(){
				 $("#NextStateID_Search").focus();	
				 $("#NextStateID_Search").val(closedState);
				 $("#NextStateID_Search").trigger("change");
				 alert('wczytano zgłoszenie');		
				  setTimeout(function(){
									 // // debugger;
					  for (i = 0; i < $('.jstree-anchor').length; i++) {
					    if($('.jstree-anchor')[i].text == closedState)
					    {
						 $('.jstree-anchor')[i].click();
						  setTimeout(function(){$('.jstree-anchor')[i].click();}, 200);
						  setTimeout(function(){$('.jstree-anchor')[i].click();}, 300);
						  return;
					    }
					  }
				  }, 400);
	 },totalTime);
	

}
	
document.addEventListener('injectedEvent', function (e) {
  var data = e.detail;
  Podium = {};

Podium.keydown = function(k) {
    var oEvent = document.createEvent('KeyboardEvent');

    // Chromium Hack
    Object.defineProperty(oEvent, 'keyCode', {
                get : function() {
                    return this.keyCodeVal;
                }
    });     
    Object.defineProperty(oEvent, 'which', {
                get : function() {
                    return this.keyCodeVal;
                }
    });     

    if (oEvent.initKeyboardEvent) {
        oEvent.initKeyboardEvent("keydown", true, true, document.defaultView, k, k, "", "", false, "");
    } else {
        oEvent.initKeyEvent("keydown", true, true, document.defaultView, false, false, false, false, k, 0);
    }

    oEvent.keyCodeVal = k;

    if (oEvent.keyCode !== k) {
        alert("keyCode mismatch " + oEvent.keyCode + "(" + oEvent.which + ")");
    }

    document.body.dispatchEvent(oEvent);
}
  InjectHelper.run(data.ClientId, data.ClientName, data.Owner, data.Queue, data.Subject, data.Description, data.InvoiceDescription, data.StartDate, data.EndDate, data.ReportedTime, data.InvoiceReportedTime, 'zamknięte z powodzeniem');
});