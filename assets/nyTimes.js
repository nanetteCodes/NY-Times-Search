    

    $("#submit").click(function(){

        $("#displayID").removeClass("displayArticles");
      
        var name = $("#name").val();
  
        var num = $("#recordsNum").val();
      
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bdf692ff663e4b23933f4431592050b1&q=" + name;

      $.ajax({
        url: url,
        method: 'GET',
      }).done(function(result) {

      

        //Checks to make sure desired amount is not greater than array
        // If it is, amount gets set to array
          if (num <= result.response.docs.length) {
             for (var i = 0; i < num; i++) {
             $("#articlesView").append(result.response.docs[i].headline.main + "<br>");
             $("#articlesView").append(result.response.docs[i].byline.original + "<br>");
             $("#articlesView").append(result.response.docs[i].pub_date + "<br>");
             $("#articlesView").append(result.response.docs[i].web_url + "<br>");
             $("#articlesView").append(result.response.docs[i].section_name + "<br>");
             $("#articlesView").append("......" + "<br>");
             }
          }

          else {
            num = result.response.docs.length;
            for (var i = 0; i < num;  i++) {
             $("#articlesView").append(result.response.docs[i].headline.main + "<br>");
             $("#articlesView").append(result.response.docs[i].byline.original + "<br>");
             $("#articlesView").append(result.response.docs[i].pub_date + "<br>");
             $("#articlesView").append(result.response.docs[i].web_url + "<br>");
             $("#articlesView").append(result.response.docs[i].section_name + "<br>");
             $("#articlesView").append("......" + "<br>");
             }
          }
         
       
      });



    });