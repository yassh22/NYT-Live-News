$(function() {
    // console.log("ready!")

    $('.frontDrop').on('change', function(event) {
        event.preventDefault()
        $('.remove').remove()
        let newsInput = $('.frontDrop').val()
        console.log(newsInput)

        $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${newsInput}.json?api-key=Ov7TMBFdahAkreAEBSG1GAZGkw7Eznm2`)
        .done(function(data) {
        console.log(data)

            $.each(data.results, function () {

                let newsTitle = this.abstract
                let picURL = this.multimedia[4].url

                // create div  to hold album cover and name
                $('.newResults').append(`<div class="parent"><img src="${picURL}"><p>${newsTitle}</p></div>`).children().addClass('select')
                
                })
            })

            .fail(function() {
            alert("Doesn't work hommie!!!") // i like this

            })

        })

    })