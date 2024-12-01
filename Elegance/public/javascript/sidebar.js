        // Fetch sidebar data from JSON and populate the sidebar
        fetch('/json/sidebar.json')
            .then(response => response.json())
            .then(data => {
                const menuList = document.getElementById('menuList');
                const socialIcons = document.getElementById('socialIcons');

                // Populate menu items
                data.menu.forEach(item => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = item.link;

                    const img = document.createElement('img');
                    img.src = item.icon;
                    img.alt = item.name + " Icon";

                    a.appendChild(img);
                    a.appendChild(document.createTextNode(" " + item.name));
                    li.appendChild(a);
                    menuList.appendChild(li);
                });

                // Populate social icons
                data.social.forEach(item => {
                    const a = document.createElement('a');
                    a.href = item.link;

                    const img = document.createElement('img');
                    img.src = item.icon;
                    img.alt = item.platform;

                    a.appendChild(img);
                    socialIcons.appendChild(a);
                });
            })
            .catch(error => console.error('Error fetching sidebar data:', error));

        // Fetch data from events JSON file and populate the main content
        fetch('/json/events.json')
            .then(response => response.json())
            .then(data => {
                const imageContainer = document.getElementById('imageContainer');
                const sliderContent = document.getElementById('sliderContent');

                data.forEach(event => {
                    // Create image elements for event images
                    const img = document.createElement('img');
                    img.src = event.image;
                    img.alt = event.title;
                    imageContainer.appendChild(img);

                    // Create slider content for event descriptions
                    const li = document.createElement('li');
                    const sliderContainer = document.createElement('div');
                    sliderContainer.classList.add('slider-container');

                    const h2 = document.createElement('h2');
                    h2.textContent = event.title;
                    const p = document.createElement('p');
                    p.textContent = event.description;

                    sliderContainer.appendChild(h2);
                    sliderContainer.appendChild(p);
                    li.appendChild(sliderContainer);
                    sliderContent.appendChild(li);
                });
            })
            .catch(error => console.error('Error fetching events data:', error));