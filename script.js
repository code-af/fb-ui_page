//Dynamic date loading with javascript functions

document.addEventListener("DOMContentLoaded", function () {

  const daySelect = document.getElementById("daySelect");
  const monthSelect = document.getElementById("monthSelect");
  const yearSelect = document.getElementById("yearSelect");

  // ---------- 1. Fill Days initially (always 31) ----------
  function fillDays(days) {
    const currentValue = daySelect.value;

    daySelect.innerHTML = '<option value="">Day</option>';

    for (let d = 1; d <= days; d++) {
      let opt = document.createElement("option");
      opt.value = d;
      opt.textContent = d;
      daySelect.appendChild(opt);
    }

    // restore selection if still valid
    if (currentValue <= days) {
      daySelect.value = currentValue;
    }
  }

  fillDays(31); // default load

  // ---------- 2. Fill Months ----------
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  months.forEach((m, i) => {
    let opt = document.createElement("option");
    opt.value = i + 1;
    opt.textContent = m;
    monthSelect.appendChild(opt);
  });

  // ---------- 3. Fill Years ----------
  const currentYear = new Date().getFullYear();

  for (let y = currentYear; y >= 1900; y--) {
    let opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    yearSelect.appendChild(opt);
  }

  // ---------- 4. Update Days Logic ----------
  function updateDays() {
    const month = parseInt(monthSelect.value);
    const year = parseInt(yearSelect.value);

    // If not selected properly → keep 31 days
    if (!month || !year) {
      fillDays(31);
      return;
    }

    // Magic: correct days in month (handles leap year automatically)
    const daysInMonth = new Date(year, month, 0).getDate();

    fillDays(daysInMonth);
  }

  // ---------- 5. Event Listeners ----------
  monthSelect.addEventListener("change", updateDays);
  yearSelect.addEventListener("change", updateDays);

});

// We are doing how to make the forms mandatory to fill according to it's required condtions using javascript
// for this project we already  did similar things with html attributes and css but we can use javascript jquery as well
console.log("hello world")
$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlenght:10},
            sname:{
                required:true,
                minlength:2,
                maxlength:10},
            emailId:{
                required:true,
                email:true
            },
            pass:{
                required:true,
                minlength:8
            },
            daySelect:{
                required:true
            },
            monthSelect:{
                required:true
            },
            yearSelect:{
                required:true
            },
            Gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"First name should contain atleast 4 characters"
            },
            sname:{
                required:"Enter last name",
                minlength:"Last name should contain atleast 2 characters"
            },
            emailId:{
                required:"Enter the email",
                email:"Please enter a vaild email address"
            },
            pass:{
                required:"You must enter a password",
                minlength:"Password has to contain atleast 8 characters"
            },
            daySelect:{
                required:"Select the day"
            },
            monthSelect:{
                required:"Select the month"
            },
            yearSelect:{
                required:"Select the year"
            },
            Gender:{
                required:"Please specify your gender"
            }
        }

    })
    $("#login-form").validate({
        rules:{
            loginMail:{
                required:true
            },
            loginPass:{
                required:true
            }
        },
        messages:{
            loginMail:{
                required:"Enter your registered email or phone number"
            },
            loginPass:{
                required:"You have to enter your password"
            }
        }
    })
})