setTimeout(function(){
    $(document).ready(function() {
        $("#DHTMLSuite_menuItem441").click(function()
        {
            setTimeout(function(){
                $(".attendDiv table").each(function() 
                { 
                    table = $(this).find("tr td:nth-child(3)"); 

                    let sum = 0; 
                    let total = 0; 

                    for (let i = 0; i < table.length; i++)
                    { 
                        let a = table[i].innerText;
                        sum += parseInt(a); 
                        total += parseInt(a.substring(a.length - 1));
                    }

                    let s = "<tr><td colspan='2'><b>Total Attendance:</b></td>" + "<td><b>" + sum + " / " + total + "</b></td></tr>"
                          + "<tr><td colspan='2'><b>Missed hours:</b></td>" + "<td><b>" + (total - sum) + "</b></td></tr>";
                    $(this).find("tr:last").after(s);
                });
            }, 500);
        });
    });
}, 500);