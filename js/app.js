$(function() {
    // console.log("ready!")

    $('.frontDrop').on('change', function(event) {
        event.preventDefault()
        $('.select').remove()
        let newsInput = $(this).val()
        // console.log(newsInput)
     
        $(".newResults li").remove();

        if($('footer').hasClass('footer-photos')){
          $('footer').removeClass('footer-photos');
        }

        if(!$('header').hasClass('header-photos')){
          $('header').addClass('header-photos');
          $('.logoImage').addClass('logo-photos');
        }

        $('.loader').css('display', 'block');

        $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${newsInput}.json?api-key=Ov7TMBFdahAkreAEBSG1GAZGkw7Eznm2`)
        .done(function(data) {
        // console.log(data)
 
        let array = []
        for (let i=0; i < 12; i++) {
            array.push(data.results[i])
        }

            $.each(array, function (index, value) {

                // Skips the news without images
                if (this.multimedia.length > 0) {
                
                  let newsLink = value.url
                  let newsTitle = value.abstract
                  let picURL = this.multimedia[4].url

                  // create div  to hold album cover and name
                  $('.newResults').append(`<li class='news-story'><div class="combine"><a href="${newsLink}" target="_blank"><img src="${picURL}"><p class="newsCont">${newsTitle}</p></a></div></li>`).children().addClass('select')
                }
            })
        })

        .fail(function() {
        alert("Doesn't work hommie!!!")

        })

        .always(() => $('.loader').hide('fast'));

    })

    $(".newResults").on("mouseenter", "li", function(event) {
        $(event.currentTarget).find(".newsCont").slideDown();
    });

    $(".newResults").on("mouseleave", "li", function(event) {
      $(event.currentTarget).find(".newsCont").slideUp();
    });  

})