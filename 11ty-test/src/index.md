---
title: Testing a template layout
layout: base.njk
---

## some title here

As a species, creativity will always live on the border of our understanding. Despite how lavishly our culture rewards those capable of tapping into their creative faculties, we still have minimal comprehension of what governs creativity and how to quantify it. Any class that you take on creativity will only offer ideas and suggestions designed to inspire creative thought, but there's no concrete evidence to support that the tactics and techniques employed are effective for everyone. In short, we need to develop creative solutions to help us understand how creativity works.

{% for page in collections.pages %}
  - [{{ page.data.title }}]({{ page.url }})
{%- endfor %}

Since creativity exists in such a nebulous sphere of human understanding, the only people qualified to delve into the intricacies of such an ineffable concept are those that make a living off creativity. In the video linked above, the creative mastermind behind some of the 20th century's most significant musical acts, Rick Rubin, sits down to discuss why he believes that creativity thrives best under restriction.


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testing a template layout</title>
    <link rel="stylesheet" href="/css/main.css">
</head>
<body>
    <main>
    <header>
        <h1>Testing a template layout</h1>  
    </header>
        <article>
            <h2>some title here</h2>
<p>As a species, creativity will always live on the border of our understanding. Despite how lavishly our culture rewards those capable of tapping into their creative faculties, we still have minimal comprehension of what governs creativity and how to quantify it. Any class that you take on creativity will only offer ideas and suggestions designed to inspire creative thought, but there's no concrete evidence to support that the tactics and techniques employed are effective for everyone. In short, we need to develop creative solutions to help us understand how creativity works.</p>
<p>Since creativity exists in such a nebulous sphere of human understanding, the only people qualified to delve into the intricacies of such an ineffable concept are those that make a living off creativity. In the video linked above, the creative mastermind behind some of the 20th century's most significant musical acts, Rick Rubin, sits down to discuss why he believes that creativity thrives best under restriction.</p>

            </article>
    </main>
    <footer>
        <p>&copy; 2023 11ty test</p>
    </footer>
</body>
</html>