var url = "https://developerfunnel.herokuapp.com/location"

const getCity = () => {
    fetch(url,{method:'GET'})
    .then((data) => data.json())
    .then((out) => {
        for(i=0;i<out.length;i++){
            var a = document.createElement('tr')
            var b = document.createElement('td')
            var c = document.createElement('td')
            b.textContent = out[i].city_name;
            c.textContent = out[i].country_name;
            a.appendChild(b)
            a.appendChild(c)
            document.getElementById('tabledata').append(a)
        }
    })
}
