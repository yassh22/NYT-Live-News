$(function() {
    // console.log("ready!")

    $('.frontDrop').on('change', function(event) {
        event.preventDefault()
        $('.remove').remove()
        let newsInput = $(this).val()
        // console.log(newsInput)
        $(".logoImage").css({
            "width" : "80px",
            "top" : "5px",
            "height" : "80px",
          });
          $(".frontDrop").css({
            "width" : "100px",
            "top" : "40px",
            "left" : "150px",
          });
          $("h1").css({
            "top" : "17px",
            "left" : "150px",
          });
          $(".wrapper").css({
            "height" : "100px",
          });

          $(".newResults").empty();

        $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${newsInput}.json?api-key=Ov7TMBFdahAkreAEBSG1GAZGkw7Eznm2`)
        .done(function(data) {
        console.log(data)
 
        let array = []
        for (let i=0; i < 12; i++) {
            array.push(data.results[i])
        }

            $.each(array, function (index, value) {

                let newsTitle = value.abstract
                let picURL = this.multimedia[4].url

                // create div  to hold album cover and name
                $('.newResults').append(`<li class='news-story'><img src="${picURL}"><p class="newsCont">${newsTitle}</p></li>`).children().addClass('select')
                
            })
        })

            .fail(function() {
            alert("Doesn't work hommie!!!")

            })

        })

    })