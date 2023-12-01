let prevScrollPos = window.pageYOffset;

        window.onscroll = function() {
            const currentScrollPos = window.pageYOffset;

            if (prevScrollPos > currentScrollPos) {
                document.getElementById("header").style.top = "0";
            } else {
                document.getElementById("header").style.top = "-150px";
            }

            prevScrollPos = currentScrollPos;
        };  


        var show = document.getElementById('show');
        var close = document.getElementById('close');
        var registration = document.getElementById('registration');
        var all = document.querySelector('.all');
    
        show.addEventListener('click', function() {
          registration.style.display = 'block';
          all.classList.add('blur');
          all.classList.add('backgroundchange');
        });
    
        close.addEventListener('click', function() {
          registration.style.display = 'none';
          all.classList.remove('blur');
          all.classList.remove('backgroundchange');
        });



        function showanswer() {
          var hiddenanswer = document.getElementById("hiddenanswer");
          if (hiddenanswer.style.display === "block") {
            hiddenanswer.style.display = "none";
          } else {
            hiddenanswer.style.display = "block";
          }
        }
        


        