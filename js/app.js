$(function() {

    // jQuery 
    // let $el = $('p').css('color', 'purple')
    // console.log($el)

    // 
    // let $el = $('.list').children()
    // console.log($el)

    // Exercise 1
    // Method 1
    // let $el = $('article p:nth-child(2)').css('color', 'red')
    // console.log($el)

    // Method 2
    // let $el = $('.second-line').css('color', 'red')
    // console.log($el)

    // Method 3
    // let $el = $('article p:last-child').css('color', 'red')
    // console.log($el)


    // Button and click-alert
    // $('div').on('click','button', event => {
    //     alert('You Clicked ME!')
    // })

    // $('div').append('<button>Click Me</button>')
    // $('ul')

    // $('button').on('click', event => {
    //     let $val = $('input').val()
    //     console.log($val)

    //     $('ul').append(`<li><span>${$val}</span><a href="#" class="delete">[done]</a></li>`)
    // });

    // $('ul').on('click', 'a', function(event) {
    //     $(event.target).siblings().css('text-decoration', 'line-through')
    // });



// Type 1 and 2
   
    // $(function () {

    //     $('a').on('click', function(event) {

    //         $('p').hide()

    //         let $sibling = $(event.target).siblings()

    //         $sibling.toggle('slow').show()
    //     })
    // });


    // $(".frontDrop").on('change', function(event){

    //     let $selection = $('.frontDrop').val()
    //     console.log($selection)
    // })

//     $("button").on("click", function() {
//     $.getJSON("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Ov7TMBFdahAkreAEBSG1GAZGkw7Eznm2")
        
//         .done(function(data) {

//             console.log(data)
//         //   $.each(data, function(key, value) {
//         //     console.log(value)
//         //     $('.repo-list').append(`<li>${value.language}</li>`)

//         //   });
//         });
//       });
  
// });

// https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Ov7TMBFdahAkreAEBSG1GAZGkw7Eznm2

// Ov7TMBFdahAkreAEBSG1GAZGkw7Eznm2




// $("#get-weather").on("click", function() {

//         $.ajax({
//            method: 'GET',
//            url: 'https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&appid=4a48e1e1428fd83889074671fbf259d9'
//         }) 

//         .done(function(data) {

//             let iconcode = data.weather[0].icon;
//             let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

//             $('.results').append(`<img src=${iconurl}></img>`)
//             $('.results').append(`<p>${data.weather["0"].main}</p>`)
//             $('.results').append(`<p>${data.weather["0"].description}</p>`)

//            console.log(data)
        
//         })
//     });




$('input:submit').on('click', (e) => {
    e.preventDefault()
    $('.remove').remove()
    let $artistInput = $('input:text').val().replace(' ', '+' )
    console.log($artistInput)
     $.getJSON("https://itunes.apple.com/search?entity=album&limit=6&&term=" + $artistInput)
     .done(function(data) {
         console.log(data)
         $.each(data.results, function(index, object) {
             console.log(object.collectionName)
            let albumName =  object.collectionName
            let artURL = object.artworkUrl100
            // create div to hold album cover and name
            $('.album-list').append(`<div><img src="${artURL}"><p>${albumName}</p> </div>`).children().addClass('remove')

         })
     })
     .fail(function() {
         alert("Doesn't work hommie!!!")
     })
})



                // })
    
                // let iconcode = data.weather[0].icon;
                // let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    
                // $('.results').append(`<img src=${iconurl}></img>`)
                // $('.results').append(`<p>${data.weather["0"].main}</p>`)
                // $('.results').append(`<p>${data.weather["0"].description}</p>`)

            



            });
  