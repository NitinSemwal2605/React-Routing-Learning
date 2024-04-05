import React from 'react'

function Team() {
  return (
<div class="py-20 bg-gray-50">
    <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
            <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Our  Teams </h2>
            <p class="text-gray-600 lg:w-8/12 lg:mx-auto">Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p>
        </div>
        <div class="grid gap-12 items-center md:grid-cols-3">
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" alt="man" loading="lazy" width="640" height="805" />
                <div>
                    <h4 class="text-2xl">Hentoni Doe</h4>
                    <span class="block text-sm text-gray-500">CEO-Founder</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                    src="https://www.uicc.org/sites/default/files/styles/hero_extra_large/public/2023-02/rs28645_2021wcls-virtual-day77.jpg.webp?itok=I0tkCD6J" alt="man" loading="lazy" width="1000" height="667" />
                <div>
                    <h4 class="text-2xl">Jonathan Doe</h4>
                    <span class="block text-sm text-gray-500">Chief Technical Officer</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.webp?b=1&s=170667a&w=0&k=20&c=ZGVPGtsG0XXzFcUQoDcYCNzxsmu_--Yq9H0TGboxZSA=" alt="woman" loading="lazy" width="1000" height="667" />
                <div>
                    <h4 class="text-2xl">Anabelle Doe</h4>
                    <span class="block text-sm text-gray-500">Chief Operations Officer</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Team