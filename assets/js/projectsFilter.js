$( document ).ready(function() {

  $('.btn-filter').on('click', function(){
    var category = $(this).attr('filterBy')
    filterByCategory(category)
  })

  // var projectFiltered = []

  function filterByCategory(category){
    if(!category){
      projectFiltered = projectsData
    }
    else if(category){
      projectFiltered = projectsData.filter(function(el){
        return el.category === category
      })        
    }
    projectsLoad()
  }

  function projectsLoad(){
    $('.projects').text('');
    for(i = 0; i < projectFiltered.length; i++){
      $(".projects").append('<a href="#" class="project active"><figure><img src="'+ projectFiltered[i].imageUrl +'" alt="project photo" /><i class="fa fa-area-chart" aria-hidden="true"></i><figcaption>'+ projectFiltered[i].descr +'</figcaption></figure></a>')
    }
  }
  
  filterByCategory()
});