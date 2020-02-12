window.onload = function(){
    
    this.getLocation()
}


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(guessLocation);
  } else { 
    map.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function  getDistance(p1, p2)
    {
        xVal = p1[0] - p2[0];
        yVal = p1[1] - p2[1];
        xVal = xVal*xVal;
        yVal = yVal*yVal;
        result = Math.sqrt(xVal + yVal);
        
        return result;
        
    }
    //kingston|st. andrew}st. mary|portland|st. ann|trelawny|westmoreland|hanover|clarendom|manchester|st. james|st. thomas|st. elizabeth|st. catherine 
function guessLocation(position){
    var sJames = [18.4762, -77.8939]; //1 st. james
    var kingston = [17.900, -77.283]; //2 kingston 
    var sThomas = [17.933, -76.183]; //3 st. thomas
    var sAndrew = [17.933, -76.783]; //4 st. andrew
    var sAnn = [18.4074, -77.1031]; //5 st. ann
    var trelawny = [18.4928, -77.6565]; //6 trelawny
    var westmoreland = [18.2292, -78.1393]; //7 westmoreland
    var manchester = [18.0313, -77.5046]; //8 manchester
    var hanover = [18.4504, -78.1764]; //9 hanover
    var sCath = [18.0167, -76.9748]; //10 st. catherine
    var sMary = [18.3654, -76.8923]; //11 st mary
    var portland = [18.1713, -76.4476]; //12 portland
    var clarendon = [17.9646, -77.2434]; //13 clarendon
    var sEliz = [18.0335, -77.8567]; //14 St. Elizabeth
    var minDist = 100000000000000;
    
    var capitals = [kingston, sAndrew, sThomas, portland, sMary, sAnn, sCath, sEliz, manchester, clarendon, trelawny, westmoreland, hanover, sJames];
    var location = [position.coords.latitude, position.coords.longitude];
    var mindex;
    
    for(x=0;x<14;x++)
    {
        dist = getDistance(location, capitals[x]);
        if(dist < minDist)
        {
            //console.log(x + ": " + dist);
            minDist = dist;
            mindex = x;
        }
        //console.log(x + ": " + dist);
        
    }
    //console.log("Minimum distance: ", minDist);
    let result;
    switch(mindex)
        {
            case 0:
                result = "Kingston";
                break;
            case 1:
                result = "St.Andrew";
                break;
            case 2:
                result = "St.Thomas";
                break;
            case 3:
                result = "Portland";
                break;
            case 4:
                result = "St.Mary";
                break;
            case 5:
                result = "St.Ann";
                break;
            case 6:
                result = "St.Catherine";
                break;
            case 7:
                result = "St.Elizabeth";
                break;
            case 8:
                result = "Manchester";
                break;
            case 9:
                result = "Clarendon";
                break;
            case 10:
                result = "Trelawny";
                break;
            case 11:
                result = "Westmoreland";
                break;
            case 12:
                result = "Hanover";
                break;
            case 13:
                result = "St.James";
                break;
            default:
                break;
        }
    var map = document.getElementById("location");
    var parish = document.getElementById("parish-label");
    parish.classList.add("form-label-group");
    parish.innerHTML = '<input type="text" id="parish" class="form-control" placeholder="Parish" readonly required value ='+result+'> <label for="parish">Parish</label>';
    var coords = document.getElementById("coordinates-label");
    coords.innerHTML = '<input type="text" class="form-control" placeholder="" value = '+location[0]+','+location[1]+' hidden>'
    map.innerHTML = '<iframe width="350" height="350" frameborder="0" style="border:0"src="https://www.google.com/maps/embed/v1/place?q='+position.coords.latitude+'%2C%20'+position.coords.longitude+'&key=AIzaSyCSxoHvjnVjOz3moQqkhXnASOWYaezedpE" allowfullscreen></iframe>';
    var irrigated = document.getElementByID("irrigated");
    var irrig = document.getElementByID("irrig");
    if((irrig.value == "N/A") || (irrig.value == ""))
    {
        irrigated.setAttribute("value", "Rainfed");
    }
    else
    {
        irrigated.setAttribute("value", "Irrigated");
    }
  }
