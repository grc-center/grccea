$(function() {

    $('#datetimepicker1').datetimepicker({
        minDate: moment()
    })
    $('#datetimepicker3').datetimepicker({
        minDate: moment()
    });

    // $("#office-time").datetimepicker({
    //     minDate: moment()
    // });

    // $("#lunch-time").datetimepicker({
    //     minDate: moment()
    // });

    // $("#office-time2").datetimepicker({
    //     minDate: moment()
    // });
    function isNumber(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    $("#datetimepicker1").on("dp.change", function(e) {

        var min = moment($("#datetimepicker1").val()).add(15, 'minutes');
        var min2 = moment($("#datetimepicker1").val());
        $('#datetimepicker3').data("DateTimePicker").minDate(min);
        // $('#office-time').data("DateTimePicker").minDate(min2);
        // $('#office-time2').data("DateTimePicker").minDate(min2);
        // $('#lunch-time').data("DateTimePicker").minDate(min2);
        $("#datetimepicker1").css("border-color", "#dee2e6");
    });
    $("#datetimepicker3").on("dp.change", function(e) {
        $("#datetimepicker3").css("border-color", "#dee2e6");
    })

    // $("#datetimepicker3").on("dp.change", function(e) {
    //     var min = moment($("#datetimepicker3").val());
    //     $('#office-time').data("DateTimePicker").maxDate(min);
    //     $('#office-time2').data("DateTimePicker").maxDate(min);
    //     $('#lunch-time').data("DateTimePicker").maxDate(min);
    // });

    // $("#office-time").on("dp.change", function(e) {
    //     var min = moment($("#office-time").val());
    //     $('#office-time2').data("DateTimePicker").minDate(min);
    //     $('#lunch-time').data("DateTimePicker").minDate(min);
    // });
    $("#resetSettigs").click(function() {
        $("#dialIn").val("");
        $("#extension").val("");
        $("#url").val("");
        $("#office-time").val("");
        $("#office-time2").val("");
        $("#lunch-time").val("");
        $("#vacation").val("");
    })
});

function costcenter() {
    var Data = ['ABSA Bank ATM Installation', // PROJECT
        'ERP Upgrade Project', // PROJECT
        'ABSA and S&P Merger', // PROJECT
        'Tech Debt', // PROGRAM
        'New Facility Augmentation', // PROJECT
        'DR System Augmentation', // PROGRAM
        'New Data Center Augmentation', // PROGRAM
        'Core Banking Upgrade', // PROJECT
        'Roll out of Forex System', // PROJECT
        'Enterprise Communication System Upgrade', // PROJECT
        'Hardware Upgrade', // PROGRAM
        'Mobile Banking System', // PROJECT
        'Ipka'
    ]; // PROJECT

    populateItems(Data, '#items');

    //add btn
    $("#items").change(function() {
        $("#inputCostCenter").attr("value", $("#items").val());
        $("#items").css("border-color", "#dee2e6");
        $("#inputCostCenter").css("border-color", "#424347");
    })

    //remove btn


    //populate items box with arr
    function populateItems(arr, targetMultiSelect) {
        arr.sort();
        generateOptionElements(arr, targetMultiSelect);
    }

    //reset demo


    //create option elements
    function generateOptionElements(arr, targetMultiSelect) {
        for (var i = 0; i < arr.length; i++) {
            var option = document.createElement('OPTION');
            var text = document.createTextNode(arr[i]);
            option.appendChild(text);
            $(targetMultiSelect).append(option);
        }
    }
};

// costcenter initialize
$(function() {
    costcenter();
});

function meetingtype() {
    var Data = [
        'Design Meeting',
        'Architecture Meeting',
        'Steering Committee Meeting',
        'Webinar Meeting',
        'Demo Type'
    ];

    populateItems(Data, '#available');

    //add btn
    $("#available").change(function() {
        $("#inputMeetingtype").attr("value", $("#available").val())
        $("#inputMeetingtype").css("border-color", "#23272b");
    })

    //populate items box with arr
    function populateItems(arr, targetMultiSelect) {
        arr.sort();
        generateOptionElements(arr, targetMultiSelect);
    }

    //create option elements
    function generateOptionElements(arr, targetMultiSelect) {
        for (var i = 0; i < arr.length; i++) {
            var option = document.createElement('OPTION');
            var text = document.createTextNode(arr[i]);
            option.appendChild(text);
            $(targetMultiSelect).append(option);
        }
    }
};


// meetingtype initialize
$(function() {
    meetingtype();
});

$('#user-btn-add').click(function() {
    $('#availableUsers option:selected').each(function() {
        var selected = $(this).val();
        var id = $(this).attr("uid");
        $(this).remove();
        $('#selectedUsers').append("<option value='" + selected + "' uid=" + id + ">" + selected + "</option>")
    })
});

//remove btn
$('#user-btn-remove').click(function() {
    $('#selectedUsers option:selected').each(function() {
        var selected = $(this).val();
        var id = $(this).attr("uid");
        $(this).remove();
        $('#availableUsers').append("<option value='" + selected + "' uid=" + id + ">" + selected + "</option>")
    })
});

$(function() {
    var $filters = $('#filterby');
    var $items = $('#items');
    var $itemsList = $items.find('option').clone();
    var workeranditems = {
        '': [
            'ABSA Bank ATM Installation', // PROJECT
            'ERP Upgrade Project', // PROJECT
            'ABSA and S&P Merger', // PROJECT
            'Tech Debt', // PROGRAM
            'New Facility Augmentation', // PROJECT
            'DR System Augmentation', // PROGRAM
            'New Data Center Augmentation', // PROGRAM
            'Core Banking Upgrade', // PROJECT
            'Roll out of Forex System', // PROJECT
            'Enterprise Communication System Upgrade', // PROJECT
            'Hardware Upgrade', // PROGRAM
            'Mobile Banking System', // PROJECT
            'Ipka'
        ], // PROJECT
        PROJECT: [
            'ABSA Bank ATM Installation', // PROJECT
            'ERP Upgrade Project', // PROJECT
            'ABSA and S&P Merger', // PROJECT
            'New Facility Augmentation', // PROJECT
            'Core Banking Upgrade', // PROJECT
            'Roll out of Forex System', // PROJECT
            'Enterprise Communication System Upgrade', // PROJECT
            'Mobile Banking System', // PROJECT
            'Ipka'
        ], // PROJECT
        PROGRAM: [
                'Tech Debt', // PROGRAM
                'DR System Augmentation', // PROGRAM
                'New Data Center Augmentation', // PROGRAM
                'Hardware Upgrade'
            ] // PROGRAM
    }

    $filters.change(function() {
        var $selectedWorker = $(this).find('option:selected').text();
        $items.html($itemsList.filter(function() {
            return $.inArray($(this).text(), workeranditems[$selectedWorker]) >= 0;
        }));
    });
});

//today's date 
var rightNow = new Date();
var now = rightNow.toISOString().slice(0, 10).replace(/-/g, "");
$(function() {
    /* initialize #calendarOne
    -----------------------------------------------------------------*/
    $('#calendarOne').fullCalendar({
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        now: now, //today's date 
        validRange: {
            start: now, //today's date 
        },
        defaultView: 'dayGridMonth',
        editable: false, // enable draggable events
        droppable: true, // this allows things to be dropped onto the calendar
        aspectRatio: 2,
        scrollTime: '00:00', // undo default 6am scrollTime
        header: {
            left: 'today',
            center: 'title',
            right: 'prev,next'
        },
        defaultView: 'timelineDay',
        resourceLabelText: 'Add Attendee',
        resources: [{
            id: 'm2',
            title: "Mumbai",
            children: [{
                id: 2,
                title: 'Amit Jain'
            }]
        }],
        timeFormat: 'H(:mm)',
        events: [],
        allDay: false,
        eventBorderColor: 'transparent',
        selectable: true,
        eventColor: 'red',
        viewRender: function(view, element) {
            var b = $('#calendarOne').fullCalendar('getDate');
            $('#calendarTwo').fullCalendar("gotoDate", b);
        },
    });

    /* #calendarTwo initialize
    -----------------------------------------------------------------*/
    $('#calendarTwo').fullCalendar({
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        plugins: ['interaction', 'dayGrid'],
        defaultView: 'dayGridMonth',
        now: now,
        aspectRatio: 2,
        validRange: {
            start: now,
        },
        editable: false, // enable draggable events
        droppable: true, // this allows things to be dropped onto the calendar
        scrollTime: '00:00', // undo default 6am scrollTime
        header: {
            left: 'today',
            center: 'title',
            right: 'prev,next'
        },
        defaultView: 'timelineDay',
        resourceLabelText: 'Select Room',
        resources: [],
        timeFormat: 'H(:mm)',
        events: [],
        eventBorderColor: 'transparent',
        textColor: 'black',
        plugins: ['interaction', 'dayGrid'],
        selectable: true,
        ubnselectAuto: false,
        backgroundColor: 'gray',
        resourceRender: function(resourceObj, labelTds, bodyTds) {
            labelTds.on('click', function() {
                $("#modalAssignUsers").modal('show');
            });
        },
        viewRender: function(view, element) {
            var b = $('#calendarTwo').fullCalendar('getDate');
            $('#calendarOne').fullCalendar("gotoDate", b);
        },
        drop: function(date, jsEvent, ui, resourceId) {
            console.log('drop', date.format(), resourceId);

            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        },
        eventReceive: function(event) { // called when a proper external event is dropped
            console.log('eventReceive', event);
        },
        eventDrop: function(event) { // called when an event (already on the calendar) is moved
            console.log('eventDrop', event);
        }
    });

    function generateEvents() {
        var start = moment($("#datetimepicker1").val()).format();
        var end = moment($("#datetimepicker3").val()).format();
        var start1 = moment($("#datetimepicker1").val()).tz("America/New_York").format("h:mm a");
        var end1 = moment($("#datetimepicker3").val()).tz("America/New_York").format("h:mm a");

        var start2 = moment($("#datetimepicker1").val()).tz('Asia/Kolkata').format("h:mm a");
        var end2 = moment($("#datetimepicker3").val()).tz('Asia/Kolkata').format("h:mm a");
        $('#calendarOne').fullCalendar('renderEvent', {
            title: start1 + ' - ' + end1,
            start: start,
            end: end,
            resourceIds: [
                'm0',
                'm3', 'm4', 'm5', 'm6', 'm7'
            ],
            backgroundColor: 'transparent',
            textColor: 'black',
        }, true)
        $('#calendarOne').fullCalendar('renderEvent', {
            title: start2 + ' - ' + end2,
            start: start,
            end: end,
            resourceIds: [
                'm1',
                'm2',
            ],
            backgroundColor: 'transparent',
            textColor: 'black',
        }, true)
        $('#calendarTwo').fullCalendar('renderEvent', {
            title: start2 + ' - ' + end2,
            start: start,
            end: end,
            resourceId: 'l0',
            backgroundColor: 'transparent',
            textColor: 'black',
        }, true)
    }

    function changeEventBC() {
        var start = moment($("#datetimepicker1").val()).format();
        var end = moment($("#datetimepicker3").val()).format();
        var defaultEnd = moment($("#datetimepicker3").val()).format();
        var start1 = moment($("#datetimepicker1").val()).tz("America/New_York").format("h:mm a");
        var start2 = moment($("#datetimepicker1").val()).tz('Asia/Kolkata').format("h:mm a");
        var time1 = moment($("#datetimepicker1").val()).tz("America/New_York").format("HH");
        var time2 = moment($("#datetimepicker1").val()).tz('Asia/Kolkata').format("HH");
        if (time1 >= 23 || time1 < 7) {
            $('#calendarOne').fullCalendar('removeEvents', 'L0');
            for (i = 0; i < 20; i++) {
                $('#calendarOne').fullCalendar('removeEvents', i);
                $('#calendarOne').fullCalendar('renderEvent', {
                    id: i,
                    start: start,
                    end: defaultEnd,
                    resourceId: i,
                    backgroundColor: 'red'
                }, true)
            }

        } else {
            for (i = 0; i < 20; i++) {
                $('#calendarOne').fullCalendar('removeEvents', i);
                $('#calendarOne').fullCalendar('renderEvent', {
                    id: i,
                    start: start,
                    end: defaultEnd,
                    resourceId: i,
                    backgroundColor: 'gray'
                }, true)
            }
        }
        if (time2 >= 23 || time2 < 7) {

            $('#calendarTwo').fullCalendar('removeEvents', 'L0');
            $('#calendarTwo').fullCalendar('renderEvent', {
                id: 'L0',
                start: start,
                end: defaultEnd,
                resourceId: 'L0',
                backgroundColor: 'red'
            }, true)
            $('#calendarOne').fullCalendar('removeEvents', 1);
            $('#calendarOne').fullCalendar('renderEvent', {
                id: 1,
                start: start,
                end: defaultEnd,
                resourceId: 1,
                backgroundColor: 'red'
            }, true)
            $('#calendarOne').fullCalendar('removeEvents', 2);
            $('#calendarOne').fullCalendar('renderEvent', {
                id: 2,
                start: start,
                end: defaultEnd,
                resourceId: 2,
                backgroundColor: 'red'
            }, true)
        } else {
            $('#calendarOne').fullCalendar('renderEvent', {
                id: 'L0',
                start: start,
                end: defaultEnd,
                resourceId: 'L0',
                backgroundColor: 'gray'
            }, true)
            $('#calendarOne').fullCalendar('removeEvents', 1);
            $('#calendarOne').fullCalendar('renderEvent', {
                id: 1,
                start: start,
                end: defaultEnd,
                resourceId: 1,
                backgroundColor: 'gray'
            }, true)
            $('#calendarOne').fullCalendar('removeEvents', 2);
            $('#calendarOne').fullCalendar('renderEvent', {
                id: 2,
                start: start,
                end: defaultEnd,
                resourceId: 2,
                backgroundColor: 'gray'
            }, true)
        }

    }

    function minutesWriter() {
        var start = moment($("#datetimepicker1").val()).format();
        var end = moment($("#datetimepicker3").val()).add(1, "hours").format();
        var defaultEnd = moment($("#datetimepicker3").val()).format();
        var start1 = moment($("#datetimepicker1").val()).tz("America/New_York").format("h:mm a");
        var start2 = moment($("#datetimepicker1").val()).tz('Asia/Kolkata').format("h:mm a");
        var time1 = moment($("#datetimepicker1").val()).tz("America/New_York").format("HH");
        var time2 = moment($("#datetimepicker1").val()).tz('Asia/Kolkata').format("HH");
        var id = $("#selectMinutesWriter").children(":selected").attr("id");
        var id = id.replace('min', '');
        if (id == "1") {
            $('#calendarOne').fullCalendar('removeEvents', 1);
            if (time2 >= 23 || time2 < 7) {
                $('#calendarOne').fullCalendar('renderEvent', {
                    id: 1,
                    start: start,
                    end: end,
                    resourceId: 1,
                    backgroundColor: 'red'
                }, true)
            } else {
                $('#calendarOne').fullCalendar('renderEvent', {
                    id: 1,
                    start: start,
                    end: end,
                    resourceId: 1,
                    backgroundColor: 'gray'
                }, true)
            }

        } else if (id == "2") {
            $('#calendarOne').fullCalendar('removeEvents', 2);
            if (time2 >= 23 || time2 < 7) {
                $('#calendarOne').fullCalendar('renderEvent', {
                    id: 2,
                    start: start,
                    end: end,
                    resourceId: 2,
                    backgroundColor: 'red'
                }, true)
            } else {
                $('#calendarOne').fullCalendar('renderEvent', {
                    id: 2,
                    start: start,
                    end: end,
                    resourceId: 2,
                    backgroundColor: 'gray'
                }, true)
            }


        } else {

            $('#calendarOne').fullCalendar('removeEvents', id);
            if (time1 >= 23 || time1 < 7) {
                $('#calendarOne').fullCalendar('renderEvent', {
                    id: id,
                    start: start,
                    end: end,
                    resourceId: id,
                    backgroundColor: 'red'
                }, true)
            } else {
                $('#calendarOne').fullCalendar('renderEvent', {
                    id: id,
                    start: start,
                    end: end,
                    resourceId: id,
                    backgroundColor: 'gray'
                }, true)
            }
        }
    }
    var ar = 0;
    $("#addAtt").click(function() { //button click event
        $('#calendarOne').fullCalendar('removeResource', 'm0');
        $('#calendarOne').fullCalendar('removeResource', 'm1'); //remove all resources
        $('#calendarOne').fullCalendar('removeResource', 'm2');
        $('#calendarOne').fullCalendar('removeResource', 'm3');
        $('#calendarOne').fullCalendar('removeResource', 'm4');
        $('#calendarOne').fullCalendar('removeResource', 'm5');
        $('#calendarOne').fullCalendar('removeResource', 'm6');
        $('#calendarOne').fullCalendar('removeResource', 'm7');
        $('#calendarOne').fullCalendar('removeResource', 'm8');
        $('#calendarOne').fullCalendar('removeResource', 'm9'); //remove all events
        var array = []; //array to check if resurce is already created 
        var count = 0;
        //data from inputs for events
        var start = moment($("#datetimepicker1").val()).format();
        var end = moment($("#datetimepicker3").val()).add(1, 'hours').format();
        var defaultEnd = moment($("#datetimepicker3").val()).format();
        $('#calendarOne').fullCalendar('removeEvents');
        $('#calendarTwo').fullCalendar('removeEvents');
        $("#tbody1 input:checked").each(function() {
            var el = $(this).attr('city');
            var id = $(this).attr('eid');
            $('#calendarOne').fullCalendar('renderEvent', {
                id: id,
                start: start,
                end: defaultEnd,
                resourceId: id
            }, true)
            if (!array.includes(el)) {

                var resource = {
                    id: 'm' + id,
                    title: el,
                    children: []
                }
                var child = [];
                $("#tbody1 input[city=" + el + "]:checked").each(function() { //map trogh element = same city
                    var id = $(this).attr('eid');
                    var t = $(this).parent();
                    var newchild = {
                        id: id,
                        title: t.next().text()
                    }
                    child.push(newchild);
                    count++;
                })
                resource.children = child;
                $('#calendarOne').fullCalendar(
                    'addResource', resource
                );
                array.push(el);

            } else {
                return;
            }
        })
        $('#calendarOne').fullCalendar('removeEvents', 'L0');
        $('#calendarTwo').fullCalendar('renderEvent', {
            id: 'L0',
            start: start,
            end: defaultEnd,
            resourceId: 'L0',
            backgroundColor: 'gray'
        }, true)

        generateEvents();


        changeEventBC();

        minutesWriter();
    })

    $("#addRoom").click(function() { //button click event
        $('#calendarTwo').fullCalendar('removeResource', 'l0');
        var array = []; //array to check if resurce is already created 
        var count = 0;
        $("#tbody2 input:checked").each(function(index) {
            var el = $(this).attr('city');

            if (!array.includes(el)) {
                var resource = {
                    id: 'l' + count,
                    title: el,
                    children: []
                }
                var child = [];
                $("#tbody2 input[city=" + el + "]:checked").each(function(index) { //map trogh element = same city
                    var t = $(this).parent();
                    var newchild = {
                        id: 'L' + count,
                        title: t.next().text()
                    }
                    child.push(newchild);
                    count++;
                })
                resource.children = child;
                $('#calendarTwo').fullCalendar(
                    'addResource', resource
                );
                array.push(el);
                count++;
            } else {
                return;
            }
        })
        $('#calendarOne').fullCalendar('removeResource', 'm0');
        $('#calendarOne').fullCalendar('removeResource', 'm1'); //remove all resources
        $('#calendarOne').fullCalendar('removeResource', 'm2');
        $('#calendarOne').fullCalendar('removeResource', 'm3');
        $('#calendarOne').fullCalendar('removeResource', 'm4');
        $('#calendarOne').fullCalendar('removeResource', 'm5');
        $('#calendarOne').fullCalendar('removeResource', 'm6');
        $('#calendarOne').fullCalendar('removeResource', 'm7');
        $('#calendarOne').fullCalendar('removeResource', 'm8');
        $('#calendarOne').fullCalendar('removeResource', 'm9'); //remove all events
        var array = []; //array to check if resurce is already created 
        var count = 0;
        //data from inputs for events
        var start = moment($("#datetimepicker1").val()).format();
        var end = moment($("#datetimepicker3").val()).add(1, 'hours').format();
        var defaultEnd = moment($("#datetimepicker3").val()).format();
        $('#calendarOne').fullCalendar('removeEvents');
        $('#calendarTwo').fullCalendar('removeEvents');
        $("#tbody1 input:checked").each(function() {
            var el = $(this).attr('city');
            var id = $(this).attr('eid');
            $('#calendarOne').fullCalendar('renderEvent', {

                id: id,
                start: start,
                end: defaultEnd,
                resourceId: id
            }, true)
            if (!array.includes(el)) {

                var resource = {
                    id: 'm' + id,
                    title: el,
                    children: []
                }
                var child = [];
                $("#tbody1 input[city=" + el + "]:checked").each(function() { //map trogh element = same city
                    var id = $(this).attr('eid');
                    var t = $(this).parent();
                    var newchild = {
                        id: id,
                        title: t.next().text()
                    }
                    child.push(newchild);
                    count++;
                })
                resource.children = child;
                $('#calendarOne').fullCalendar(
                    'addResource', resource
                );
                array.push(el);

            } else {
                return;
            }
        })
        $('#calendarOne').fullCalendar('removeEvents', 'L0');
        $('#calendarTwo').fullCalendar('renderEvent', {
            id: 'L0',
            start: start,
            end: defaultEnd,
            resourceId: 'L0',
            backgroundColor: 'gray'
        }, true)

        generateEvents();


        changeEventBC();

        minutesWriter();


    })

});
$("#tbody2 input").change(function() {
    if ($("#tbody2 input:checked").val()) {
        $("#addRoom").attr("data-target", "#modalRoomSelect");
        $("#addRoom").attr("data-toggle", "modal")
    } else {
        $("#addRoom").attr("data-target", "");
        $("#addRoom").attr("data-toggle", "")
    }
})

function changeBorder() {
    $("button[data-target='#modalAgenda']").css("border-color", "#424347");
}
// add input row
$(document).ready(function() {
    var counter = 0;

    $("#addrow").on("click", function() {
        var newRow = $('<div class="row pb-2 px-2">');
        var cols = "";
        cols += '<div class="col-11 pr-1"><input class="form-control form-control-sm" id="inputAgenda' + counter + '" name="inputAgenda' + counter + '" type="text" maxlength="50" onchange="changeBorder()"></div>';
        cols += '<i class="fa fa-times-circle fa-lg close text-danger my-auto"></i>';
        newRow.append(cols);
        $("div.order-list").append(newRow);
        counter++;
    });

    $("div.order-list").on("click", ".fa-times-circle", function(event) {
        $(this).closest("div").remove();
        counter -= 1
    });
});

$(document).ready(function() {
    var counter = 0;

    $("#addOfficeTime").on("click", function() {
        var cols = "";
        cols += '<input class="form-control office-time" type="text" name="office-time' + counter + '" style="margin-top:4px;"><input class="form-control office-time" style="margin-left: 4px;margin-top: 4px;margin-right: 2px;" type="text" name="office-time' + counter + '">';
        cols += '<button class="btn" type="button" style="margin-top:4px;"><i class="fa fa-times-circle fa-lg close text-danger my-auto"></i></button>';
        $("#office-time-div").append(cols);
        counter++;
        if (counter >= 2) {
            $("#addOfficeTime").attr("disabled", "disabled");
        }

    });


});


$("#sendInvite").click(function() {
    var empty = 1;
    $("#textareaAgenda input").each(function() {
        if ($(this).val()) {
            $("button[data-target='#modalAgenda']").css("border-color", "#424347");
            empty = 0;
        }
    })
    var error = $("#error-body").empty();
    if ($("#items").val() == "") {
        error.append("<li>Please Choose Cost Center</li>");
        $("#inputCostCenter").css("border-color", "red");
        $("#items").css("border-color", "red");
    }
    if ($("#selectTitle").val() == "") {
        error.append("<li>Please Choose Title</li>");
        $("#selectTitle").css("border-color", "red");
    }
    if (empty) {
        error.append("<li>Please Choose Agenda</li>");
        $("button[data-target='#modalAgenda']").css("border-color", "red");
    }
    if ($("#datetimepicker1").val() == "") {
        error.append("<li>Please choose the start date</li>");
        $("#datetimepicker1").css("border-color", "red");

    }
    if ($("#datetimepicker3").val() == "") {
        error.append("<li>Please choose the end date</li>");
        $("#datetimepicker3").css("border-color", "red");
    }
    if ($("#dialIn").val() == "" || $("#extension").val() == "") {
        error.append("<li>Please fill Dial In</li>");
        $("#dialButton").css("border-color", "red");
    }
    if ($("#available").val() == "") {
        error.append("<li>Please choose meeting type</li>");
        $("#inputMeetingtype").css("border-color", "red");
    }
    if ($("#tbody1 input:checked").length < 2) {
        error.append("<li>Please select atleast two users</li>");
        $("#buttonPlus").css("border-color", "red");
    }
    if (error.text() != "") {
        $("#modalError").modal("show");
    } else {
        $("#meeting-title").html($("#selectTitle").val());
        $("#meeting-agenda").empty();
        $("#textareaAgenda input").each(function() {
            var val = $(this).val();
            if (val) {
                $("#meeting-agenda").append("<p>" + val + "</p>")
            }
        })
        var start1 = moment($("#datetimepicker1").val()).tz("America/New_York").format("MMM Do YYYY h:mm a");
        var end1 = moment($("#datetimepicker3").val()).tz("America/New_York").format("MMM Do YYYY h:mm a");

        var start2 = moment($("#datetimepicker1").val()).tz('Asia/Kolkata').format("MMM Do YYYY h:mm a");
        var end2 = moment($("#datetimepicker3").val()).tz('Asia/Kolkata').format("MMM Do YYYY h:mm a");
        $("#meeting-dial").html($("#inputTitle").val());
        $("#meeting-min").html($("#selectMinutesWriter option:selected").text());
        $("#meeting-cost").html($("#items").val());
        $("#meeting-type").html($("#available").val());
        $("#meeting-memo").html($("#textareaMeetingMemo").val());
        $("#meeting-time").html("<p>Mumbai time: " + " " + start2 + " - " + end2 + "</p><p>Boston time:" + " " + start1 + " - " + end1 + "</p><p>Raleigh time:" + " " + start1 + " - " + end1 + "</p>");
        $("#meeting-att").empty();
        $("#tbody1 input:checked").each(function() {
            var uid = $(this).attr("eid");
            var text = $(this).parent().next().text();
            if ($("#selectedUsers option[uid='" + uid + "']").val()) {
                $("#meeting-att").append("<p>" + text + " - Mumbai Meeting Room</p>");
            } else {
                $("#meeting-att").append("<p>" + text + " - My Desk - Phone/Desktop Sharing</p>");
            }
        })

        $("#modalSummary").modal("show");
    }
})
$("#selectTitle").change(function() {
    $("#selectTitle").css("border-color", "#dee2e6");
})


$("#addAtt").click(function() {
    if ($("#tbody1 input:checked").length > 1) {
        $("#buttonPlus").css("border-color", "#424347");
    }
    $("#selectMinutesWriter").empty();
    $("#availableUsers").empty();
    $("#tbody1 input:checked").each(function() {
        index = $(this).attr("eid");
        var text = $(this).parent().next().text();

        $("#selectMinutesWriter").append("<option value=" + text + " id='min" + index + "'>" + text + "</option>");

        $("#availableUsers").append("<option value='" + text + "'" + " uid='" + index + "'" + ">" + text + "</option>");
    })

})

function generateEvents() {
    var start = moment($("#datetimepicker1").val()).format();
    var end = moment($("#datetimepicker3").val()).format();
    var start1 = moment($("#datetimepicker1").val()).tz("America/New_York").format("h:mm a");
    var end1 = moment($("#datetimepicker3").val()).tz("America/New_York").format("h:mm a");

    var start2 = moment($("#datetimepicker1").val()).tz('Asia/Kolkata').format("h:mm a");
    var end2 = moment($("#datetimepicker3").val()).tz('Asia/Kolkata').format("h:mm a");
    $('#calendarOne').fullCalendar('renderEvent', {
        title: start1 + ' - ' + end1,
        start: start,
        end: end,
        resourceIds: [
            'm0',
            'm3', 'm4', 'm5', 'm6', 'm7'
        ],
        backgroundColor: 'transparent',
        textColor: 'black',
    }, true)
    $('#calendarOne').fullCalendar('renderEvent', {
        title: start2 + ' - ' + end2,
        start: start,
        end: end,
        resourceIds: [
            'm1',
            'm2',
        ],
        backgroundColor: 'transparent',
        textColor: 'black',
    }, true)
    $('#calendarTwo').fullCalendar('renderEvent', {
        title: start2 + ' - ' + end2,
        start: start,
        end: end,
        resourceId: 'l0',
        backgroundColor: 'transparent',
        textColor: 'black',
    }, true)
}

function changeEventBC() {
    var start = moment($("#datetimepicker1").val()).format();
    var end = moment($("#datetimepicker3").val()).format();
    var defaultEnd = moment($("#datetimepicker3").val()).format();
    var start1 = moment($("#datetimepicker1").val()).tz("America/New_York").format("h:mm a");
    var start2 = moment($("#datetimepicker1").val()).tz('Asia/Kolkata').format("h:mm a");
    var time1 = moment($("#datetimepicker1").val()).tz("America/New_York").format("HH");
    var time2 = moment($("#datetimepicker1").val()).tz('Asia/Kolkata').format("HH");
    if (time1 >= 23 || time1 < 7) {
        for (i = 0; i < 20; i++) {
            $('#calendarOne').fullCalendar('removeEvents', i);
            $('#calendarOne').fullCalendar('renderEvent', {
                id: i,
                start: start,
                end: defaultEnd,
                resourceId: i,
                backgroundColor: 'red'
            }, true)
        }

    } else {
        for (i = 0; i < 20; i++) {
            $('#calendarOne').fullCalendar('removeEvents', i);
            $('#calendarOne').fullCalendar('renderEvent', {
                id: i,
                start: start,
                end: defaultEnd,
                resourceId: i,
                backgroundColor: 'gray'
            }, true)
        }
    }
    if (time2 >= 23 || time2 < 7) {
        $('#calendarTwo').fullCalendar('removeEvents', 'L0');
        $('#calendarTwo').fullCalendar('renderEvent', {
            id: 'L0',
            start: start,
            end: defaultEnd,
            resourceId: 'L0',
            backgroundColor: 'red'
        }, true)
        $('#calendarOne').fullCalendar('removeEvents', 1);
        $('#calendarOne').fullCalendar('renderEvent', {
            id: 1,
            start: start,
            end: defaultEnd,
            resourceId: 1,
            backgroundColor: 'red'
        }, true)
        $('#calendarOne').fullCalendar('removeEvents', 2);
        $('#calendarOne').fullCalendar('renderEvent', {
            id: 2,
            start: start,
            end: defaultEnd,
            resourceId: 2,
            backgroundColor: 'red'
        }, true)
    } else {
        $('#calendarOne').fullCalendar('removeEvents', 'L0');
        $('#calendarOne').fullCalendar('renderEvent', {
            id: 'L0',
            start: start,
            end: defaultEnd,
            resourceId: 'L0',
            backgroundColor: 'gray'
        }, true)
        $('#calendarOne').fullCalendar('removeEvents', 1);
        $('#calendarOne').fullCalendar('renderEvent', {
            id: 1,
            start: start,
            end: defaultEnd,
            resourceId: 1,
            backgroundColor: 'gray'
        }, true)
        $('#calendarOne').fullCalendar('removeEvents', 2);
        $('#calendarOne').fullCalendar('renderEvent', {
            id: 2,
            start: start,
            end: defaultEnd,
            resourceId: 2,
            backgroundColor: 'gray'
        }, true)
    }

}

function minutesWriter() {
    var start = moment($("#datetimepicker1").val()).format();
    var end = moment($("#datetimepicker3").val()).add(1, "hours").format();
    var defaultEnd = moment($("#datetimepicker3").val()).format();
    var start1 = moment($("#datetimepicker1").val()).tz("America/New_York").format("h:mm a");
    var start2 = moment($("#datetimepicker1").val()).tz('Asia/Kolkata').format("h:mm a");
    var time1 = moment($("#datetimepicker1").val()).tz("America/New_York").format("HH");
    var time2 = moment($("#datetimepicker1").val()).tz('Asia/Kolkata').format("HH");
    var id = $("#selectMinutesWriter").children(":selected").attr("id");
    var id = id.replace('min', '');
    if (id == "1") {
        $('#calendarOne').fullCalendar('removeEvents', 1);
        if (time2 >= 23 || time2 < 7) {
            $('#calendarOne').fullCalendar('renderEvent', {
                id: 1,
                start: start,
                end: end,
                resourceId: 1,
                backgroundColor: 'red'
            }, true)
        } else {
            $('#calendarOne').fullCalendar('renderEvent', {
                id: 1,
                start: start,
                end: end,
                resourceId: 1,
                backgroundColor: 'gray'
            }, true)
        }

    } else if (id == "2") {
        $('#calendarOne').fullCalendar('removeEvents', 2);
        if (time2 >= 23 || time2 < 7) {
            $('#calendarOne').fullCalendar('renderEvent', {
                id: 2,
                start: start,
                end: end,
                resourceId: 2,
                backgroundColor: 'red'
            }, true)
        } else {
            $('#calendarOne').fullCalendar('renderEvent', {
                id: 2,
                start: start,
                end: end,
                resourceId: 2,
                backgroundColor: 'gray'
            }, true)
        }


    } else {

        $('#calendarOne').fullCalendar('removeEvents', id);
        if (time1 >= 23 || time1 < 7) {
            $('#calendarOne').fullCalendar('renderEvent', {
                id: id,
                start: start,
                end: end,
                resourceId: id,
                backgroundColor: 'red'
            }, true)
        } else {
            $('#calendarOne').fullCalendar('renderEvent', {
                id: id,
                start: start,
                end: end,
                resourceId: id,
                backgroundColor: 'gray'
            }, true)
        }
    }
}
$("#selectMinutesWriter").change(function() {
    var start = moment($("#datetimepicker1").val()).format();
    var end = moment($("#datetimepicker3").val()).add(1, 'hours').format();
    var defaultEnd = moment($("#datetimepicker3").val()).format();
    var id = $("#selectMinutesWriter").children(":selected").attr("id");
    var id = id.replace('min', '');

    $('#calendarOne').fullCalendar('removeEvents');
    $('#calendarTwo').fullCalendar('removeEvents');
    generateEvents();
    for (i = 0; i < 20; i++) {
        $('#calendarOne').fullCalendar('renderEvent', {
            id: i,
            start: start,
            end: defaultEnd,
            resourceId: i
        }, true)
    }
    $('#calendarTwo').fullCalendar('renderEvent', {
        id: 'L0',
        start: start,
        end: defaultEnd,
        resourceId: 'L0',
        backgroundColor: 'gray'
    }, true)
    changeEventBC();
    minutesWriter();
})



$(document).ready(function() {
    var div = $(".fc-scroller");
    div.eq('1').scroll(function() {
        var d = div.eq('1').scrollLeft();
        div.eq('7').scrollLeft(d);
    })
    div.eq('1').scroll(function() {
        var d = div.eq('1').scrollLeft();
        div.eq('7').scrollLeft(d);
    })
    div.eq('7').scroll(function() {
        var d = div.eq('7').scrollLeft();
        div.eq('1').scrollLeft(d);
    })
});

// #datetimepicker1 initialize

// function generateEvents() {
//     var start = moment($("#datetimepicker1").val()).format();
//     var end = moment($("#datetimepicker3").val()).format();
//     var start1 = moment($("#datetimepicker1").val()).tz("America/New_York").format("h:mm a");
//     var start2 = moment($("#datetimepicker1").val()).tz('Asia/Kolkata').format("h:mm a");
//     $('#calendarOne').fullCalendar('renderEvent', {
//         title: start1,
//         start: start,
//         end: end,
//         resourceIds: [
//             'm0',
//             'm3', 'm4', 'm5', 'm6', 'm7'
//         ],
//         backgroundColor: 'transparent',
//         textColor: 'black',
//     }, true)
//     $('#calendarOne').fullCalendar('renderEvent', {
//         title: start2,
//         start: start,
//         end: end,
//         resourceIds: [
//             'm1',
//             'm2',
//         ],
//         backgroundColor: 'transparent',
//         textColor: 'black',
//     }, true)
//     $('#calendarTwo').fullCalendar('renderEvent', {
//         title: start2,
//         start: start,
//         end: end,
//         resourceId: 'l0',
//         backgroundColor: 'transparent',
//         textColor: 'black',
//     }, true)
// }

$("#datetimepicker1").on("dp.change", function(e) {
    var dat = moment($("#datetimepicker1").val());
    $('#calendarTwo').fullCalendar("gotoDate", dat);
    $('#calendarOne').fullCalendar("gotoDate", dat);
    var array = []; //array to check if resurce is already created 
    var count = 0;
    //data from inputs for events
    var start = moment($("#datetimepicker1").val()).format();
    var end = moment($("#datetimepicker3").val()).add(1, 'hours').format();
    var defaultEnd = moment($("#datetimepicker3").val()).format();
    var d = $(".fc-scroller");
    d.eq('7').scrollLeft(moment($("#datetimepicker1").val()).format("HH") * 0.75 * 60);
    $('#calendarOne').fullCalendar('removeEvents');
    $('#calendarTwo').fullCalendar('removeEvents');
    $('#calendarOne').fullCalendar('removeResource', 'm0');
    $('#calendarOne').fullCalendar('removeResource', 'm1'); //remove all resources
    $('#calendarOne').fullCalendar('removeResource', 'm2');
    $('#calendarOne').fullCalendar('removeResource', 'm3');
    $('#calendarOne').fullCalendar('removeResource', 'm4');
    $('#calendarOne').fullCalendar('removeResource', 'm5');
    $('#calendarOne').fullCalendar('removeResource', 'm6');
    $('#calendarOne').fullCalendar('removeResource', 'm7');
    $('#calendarOne').fullCalendar('removeResource', 'm8');
    $('#calendarOne').fullCalendar('removeResource', 'm9');
    $("#tbody1 input:checked").each(function() {
        var el = $(this).attr('city');
        var id = $(this).attr('eid');
        $('#calendarOne').fullCalendar('renderEvent', {

            id: id,
            start: start,
            end: defaultEnd,
            resourceId: id
        }, true)
        if (!array.includes(el)) {

            var resource = {
                id: 'm' + id,
                title: el,
                children: []
            }
            var child = [];
            $("#tbody1 input[city=" + el + "]:checked").each(function() { //map trogh element = same city
                var id = $(this).attr('eid');
                var t = $(this).parent();
                var newchild = {
                    id: id,
                    title: t.next().text()
                }
                child.push(newchild);
                count++;
            })
            resource.children = child;
            $('#calendarOne').fullCalendar(
                'addResource', resource
            );
            array.push(el);

        } else {
            return;
        }
    })
    $('#calendarOne').fullCalendar('removeEvents', 'L0');
    $('#calendarTwo').fullCalendar('renderEvent', {
        id: 'L0',
        start: start,
        end: defaultEnd,
        resourceId: 'L0',
        backgroundColor: 'gray'
    }, true)

    generateEvents();


    changeEventBC();
    minutesWriter();

})

$("#datetimepicker3").on("dp.change", function(e) {
    var d = $(".fc-scroller");
    d.eq('7').scrollLeft(moment($("#datetimepicker3").val()).format("HH") * 0.75 * 60);
    var dat = moment($("#datetimepicker3").val());
    $('#calendarTwo').fullCalendar("gotoDate", dat);
    $('#calendarOne').fullCalendar("gotoDate", dat);
    var array = []; //array to check if resurce is already created 
    var count = 0;
    //data from inputs for events
    var start = moment($("#datetimepicker1").val()).format();
    var end = moment($("#datetimepicker3").val()).add(1, 'hours').format();
    var defaultEnd = moment($("#datetimepicker3").val()).format();
    $('#calendarOne').fullCalendar('removeEvents');
    $('#calendarTwo').fullCalendar('removeEvents');
    $('#calendarOne').fullCalendar('removeResource', 'm0');
    $('#calendarOne').fullCalendar('removeResource', 'm1'); //remove all resources
    $('#calendarOne').fullCalendar('removeResource', 'm2');
    $('#calendarOne').fullCalendar('removeResource', 'm3');
    $('#calendarOne').fullCalendar('removeResource', 'm4');
    $('#calendarOne').fullCalendar('removeResource', 'm5');
    $('#calendarOne').fullCalendar('removeResource', 'm6');
    $('#calendarOne').fullCalendar('removeResource', 'm7');
    $('#calendarOne').fullCalendar('removeResource', 'm8');
    $('#calendarOne').fullCalendar('removeResource', 'm9');
    $("#tbody1 input:checked").each(function() {
        var el = $(this).attr('city');
        var id = $(this).attr('eid');
        $('#calendarOne').fullCalendar('renderEvent', {

            id: id,
            start: start,
            end: defaultEnd,
            resourceId: id
        }, true)
        if (!array.includes(el)) {

            var resource = {
                id: 'm' + id,
                title: el,
                children: []
            }
            var child = [];
            $("#tbody1 input[city=" + el + "]:checked").each(function() { //map trogh element = same city
                var id = $(this).attr('eid');
                var t = $(this).parent();
                var newchild = {
                    id: id,
                    title: t.next().text()
                }
                child.push(newchild);
                count++;
            })
            resource.children = child;
            $('#calendarOne').fullCalendar(
                'addResource', resource
            );
            array.push(el);

        } else {
            return;
        }
    })
    $('#calendarOne').fullCalendar('removeEvents', 'L0');
    $('#calendarTwo').fullCalendar('renderEvent', {
        id: 'L0',
        start: start,
        end: defaultEnd,
        resourceId: 'L0',
        backgroundColor: 'gray'
    }, true)

    generateEvents();
    changeEventBC();
    minutesWriter();

});
$("#inputTitle").change(function() {
    $("#inputTitle").css("border-color", "#dee2e6");
})
$("#dialInBtn").click(function() {
    $("#inputTitle").val($("#dialIn").val() + " Ext. " + $("#extension").val());
})

$('#datetimepicker2').datetimepicker({
    format: 'L'
});
$("#datetimepicker2").on("dp.change", function(e) {
    if (moment($("#datetimepicker2").val()).format("DD/MM/YYYY") == moment($("#datetimepicker1").val()).format("DD/MM/YYYY")) {
        $("#check").show();
    } else {
        $("#check").hide();
    }
})
$(document).ready(function() {
    $("#define").change(function() {
        if ($("#define:checked").val()) {
            $("#striked").show();
            $("#non-striked").show();
        } else {
            $("#striked").hide();
            $("#non-striked").hide();
        }
    })

    $("#non-striked").change(function() {
        if ($("#non-striked-input:checked").val()) {
            $("#textareaAgenda").append('<div class="row pb-2 px-2"><div class="col-11 pr-1"><input class="form-control form-control-sm" id="inputAgenda" name="inputAgenda1" type="text" maxlength="50" onchange="changeBorder()" value="' + $("#test").text() + '"></div><i class="fa fa-times-circle fa-lg close text-danger my-auto"></i></div>');
        } else {

        }
    })
    $("#send").click(function() {
        document.location.reload(true);
    })
    $("#dialButton").click(function() {

        if ($("#extension").val() != "" && $("#dialIn").val() != "") {
            $("#dialModalBody").html($("#dialIn").val() + " Ext " + $("#extension").val() + " has been used as your dial in number. If you wish to share any other dial in number then please set the same using the 'Preferences Section'")
            $("#pref-button").show();
            $("#okclose").show();
            $("#ok").hide();
        } else {
            $("#dialModalBody").html("Your dial in preferences are not yet set up. Please set the dial in number and the preferred extension if any to help your invitees attend the meeting sent out by you")
            $("#pref-button").hide();
            $("#okclose").hide();
            $("#ok").show();
        }
    })
    $("#dialIn").change(function() {
        if ($("#dialIn").val() != "" && $("#extension").val() != "") {
            $("#dialButton").css("border-color", "#424347");
        }
    })

    $("#extension").change(function() {
        if ($("#dialIn").val() != "" && $("#extension").val() != "") {
            $("#dialButton").css("border-color", "#424347");
        }
    })


})