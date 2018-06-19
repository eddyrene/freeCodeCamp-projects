var listData;
function getRamdom(ini,fin){
  return  ini + Math.floor(Math.random() * fin);
}

function readJson(){
 return $.ajax({
    url: 'https://gist.githubusercontent.com/eddyrene/705a11b6e992341a7e12c652469caa0f/raw/c131290067e19e96a98b28269988306410d21085/quotes.json', 
    success: function(data) {
         listData = JSON.parse(data);
      }
    }); 
}
function execute(){
     var size = listData.quotes.length;
     var r = getRamdom(0,size-1);
     var ramdom = listData.quotes[r];
     $('#quoteText').text(ramdom.quote);
     $('#authorText').text(ramdom.author);
}
$(document).ready(function() {
  var elected;
  readJson().then(() => {
    execute();
  });
  $("#btnQuote").on("click", function() {      
    execute();
  });
  $("#btnTwitter").on("click", function() {
    var url = "https://codepen.io/eddyrene/pen/PRyXpd";
    var text = $('#quoteText').text() + " -   "+ $('#authorText').text();
    window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
  });
  $("#btnLinkedin").on("click", function() {
    var url = "https://codepen.io/eddyrene/pen/PRyXpd";
    var text = $('#quoteText').text() + " -   "+ $('#authorText').text();
    window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
  });
  
  
  });