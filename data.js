// FINAL CODE with updated Gourmet Cat Food image.
// Do not edit the long data strings.

const products = [
    {
        id: 1,
        name: "Premium Dog Food (5kg)",
        price: 499,
        // Render: Premium Metallic Bag with Kibble Spill and Badge
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 350'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%238d6e63'/%3E%3Cstop offset='50%25' stop-color='%23d7ccc8'/%3E%3Cstop offset='100%25' stop-color='%235d4037'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='50%25' y1='0%25' x2='50%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ffd54f'/%3E%3Cstop offset='100%25' stop-color='%23ff6f00'/%3E%3C/linearGradient%3E%3Cfilter id='c'%3E%3CfeDropShadow dx='0' dy='10' stdDeviation='10' flood-color='%23000' flood-opacity='.3'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='500' height='350' fill='%23eceff1'/%3E%3Cg filter='url(%23c)'%3E%3Cpath d='M140 50h220c15 0 30 15 30 30v220c0 15-15 30-30 30H140c-15 0-30-15-30-30V80c0-15 15-30 30-30z' fill='url(%23a)'/%3E%3Cpath d='M140 50h220c15 0 30 15 30 30v20H110V80c0-15 15-30 30-30z' fill='%23a1887f' opacity='.5'/%3E%3C/g%3E%3Ccircle cx='250' cy='180' r='80' fill='url(%23b)' stroke='%23fff' stroke-width='4'/%3E%3Ctext x='250' y='170' font-family='Arial' font-size='20' font-weight='bold' fill='%233e2723' text-anchor='middle'%3EPREMIUM%3C/text%3E%3Ctext x='250' y='200' font-family='Arial' font-size='28' font-weight='bold' fill='%233e2723' text-anchor='middle'%3EGOLD STANDARD%3C/text%3E%3Cpath d='M110 280l40 40h200l40-40v50H110z' fill='%233e2723' opacity='.2'/%3E%3Cg fill='%236d4c41'%3E%3Ccircle cx='160' cy='310' r='12'/%3E%3Ccircle cx='190' cy='325' r='14'/%3E%3Ccircle cx='220' cy='315' r='13'/%3E%3Ccircle cx='175' cy='335' r='10'/%3E%3Ccircle cx='340' cy='310' r='12'/%3E%3Ccircle cx='310' cy='325' r='14'/%3E%3C/g%3E%3C/svg%3E",
        category: "dog"
    },
    {
        id: 2,
        name: "Gourmet Cat Food (3kg)",
        price: 399,
        // Render: NEW IMAGE - Ceramic Bowl with Premium Cat Food
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 350'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23d7ccc8'/%3E%3Cstop offset='100%25' stop-color='%23a1887f'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%238d6e63'/%3E%3Cstop offset='50%25' stop-color='%235d4037'/%3E%3Cstop offset='100%25' stop-color='%233e2723'/%3E%3C/linearGradient%3E%3Cfilter id='c'%3E%3CfeDropShadow dx='0' dy='5' stdDeviation='5' flood-color='%23000' flood-opacity='.3'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='500' height='350' fill='%23f3e5f5'/%3E%3Cg filter='url(%23c)'%3E%3Cpath d='M150 180c0 50 40 90 100 90s100-40 100-90H150z' fill='url(%23a)'/%3E%3Cellipse cx='250' cy='180' rx='100' ry='30' fill='url(%23b)' stroke='%23d7ccc8' stroke-width='4'/%3E%3Cpath d='M220 230q15-10 30 0t30 0q-15-10-30 0t-30 0' fill='none' stroke='%235d4037' stroke-width='3'/%3E%3Ccircle cx='280' cy='225' r='5' fill='%235d4037'/%3E%3C/g%3E%3Ctext x='250' y='130' font-family='Arial' font-size='28' font-weight='bold' fill='%23880e4f' text-anchor='middle'%3EGourmet Feast%3C/text%3E%3C/svg%3E",
        category: "cat"
    },
    {
        id: 3,
        name: "Tropical Fish Flakes",
        price: 299,
        // Render: Clear Acrylic Container with Vibrant Flakes
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 350'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23e1f5fe' stop-opacity='.4'/%3E%3Cstop offset='100%25' stop-color='%2381d4fa' stop-opacity='.6'/%3E%3C/linearGradient%3E%3CradialGradient id='b' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%230288d1'/%3E%3Cstop offset='100%25' stop-color='%2301579b'/%3E%3C/radialGradient%3E%3Cfilter id='c'%3E%3CfeDropShadow dx='0' dy='8' stdDeviation='5' flood-color='%230277bd' flood-opacity='.4'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='500' height='350' fill='%23e0f7fa'/%3E%3Cpath d='M0 300q50-20 100 0t100 0 100-20 100 0 100-20v70H0z' fill='%234fc3f7' opacity='.3'/%3E%3Cg filter='url(%23c)'%3E%3Cpath d='M160 60h180c10 0 20 10 20 20v200c0 20-40 30-110 30s-110-10-110-30V80c0-10 10-20 20-20z' fill='url(%23a)' stroke='%234fc3f7' stroke-width='2'/%3E%3Crect x='150' y='100' width='200' height='150' rx='15' fill='%23fff' opacity='.3'/%3E%3Cg fill='%23ff5722'%3E%3Cpath d='M180 130l15-10 15 10-15 10z'/%3E%3Cpath d='M250 200l15-10 15 10-15 10z'/%3E%3C/g%3E%3Cg fill='%23ffeb3b'%3E%3Cpath d='M220 160l15-10 15 10-15 10z'/%3E%3Cpath d='M280 140l15-10 15 10-15 10z'/%3E%3C/g%3E%3Cg fill='%234caf50'%3E%3Cpath d='M200 220l15-10 15 10-15 10z'/%3E%3Cpath d='M300 180l15-10 15 10-15 10z'/%3E%3C/g%3E%3Cpath d='M160 60h180v30H160z' fill='url(%23b)'/%3E%3Ctext x='250' y='280' font-family='Arial' font-size='26' font-weight='bold' fill='%2301579b' text-anchor='middle'%3EVIBRANT FLAKES%3C/text%3E%3C/g%3E%3C/svg%3E",
        category: "fish"
    },
    {
        id: 4,
        name: "Durable Dog Chew Toy",
        price: 350,
        // Render: Heavy Duty Rope Toy
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 350'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23bf360c'/%3E%3Cstop offset='50%25' stop-color='%23ff7043'/%3E%3Cstop offset='100%25' stop-color='%23bf360c'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%230d47a1'/%3E%3Cstop offset='50%25' stop-color='%2342a5f5'/%3E%3Cstop offset='100%25' stop-color='%230d47a1'/%3E%3C/linearGradient%3E%3Cfilter id='c'%3E%3CfeDropShadow dx='5' dy='5' stdDeviation='5' flood-color='%23000' flood-opacity='.4'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='500' height='350' fill='%23fff3e0'/%3E%3Cg transform='rotate(-25 250 175)' filter='url(%23c)'%3E%3Cpath d='M80 175c50-40 100 40 150 0s100-40 150 0' fill='none' stroke='url(%23a)' stroke-width='40' stroke-linecap='round'/%3E%3Cpath d='M80 175c50-40 100 40 150 0s100-40 150 0' fill='none' stroke='url(%23b)' stroke-width='25' stroke-linecap='round'/%3E%3Ccircle cx='70' cy='175' r='35' fill='url(%23a)'/%3E%3Ccircle cx='430' cy='175' r='35' fill='url(%23b)'/%3E%3Cpath d='M70 175l-10-10M70 175l-10 10M430 175l10-10M430 175l10 10' fill='none' stroke='%233e2723' stroke-width='4'/%3E%3Ctext x='250' y='250' font-family='Arial' font-size='30' font-weight='bold' fill='%23bf360c' text-anchor='middle'%3ETOUGH CHEW%3C/text%3E%3C/g%3E%3C/svg%3E",
        category: "dog"
    },
    {
        id: 5,
        name: "Crunchy Cat Treats",
        price: 150,
        // Render: Foil Pouch with Window
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 350'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f57f17'/%3E%3Cstop offset='50%25' stop-color='%23fff176'/%3E%3Cstop offset='100%25' stop-color='%23f57f17'/%3E%3C/linearGradient%3E%3Cfilter id='b'%3E%3CfeDropShadow dx='0' dy='8' stdDeviation='6' flood-color='%23000' flood-opacity='.3'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='500' height='350' fill='%23fffde7'/%3E%3Cg filter='url(%23b)'%3E%3Cpath d='M150 40h200l30 270H120z' fill='url(%23a)'/%3E%3Cpath d='M150 40h200v40H150z' fill='%23e65100'/%3E%3Crect x='180' y='180' width='140' height='80' rx='10' fill='%23fff' stroke='%23e65100' stroke-width='3'/%3E%3Cg fill='%235d4037'%3E%3Cpath d='M200 200l15-10 15 10-15 10z'/%3E%3Cpath d='M240 220l15-10 15 10-15 10z'/%3E%3Cpath d='M280 200l15-10 15 10-15 10z'/%3E%3C/g%3E%3Ctext x='250' y='140' font-family='Arial' font-size='32' font-weight='bold' fill='%23bf360c' text-anchor='middle'%3ECRUNCHIES%3C/text%3E%3Cpath d='M350 60l30-30v60l-30-30z' fill='%23d50000'/%3E%3Ctext x='365' y='65' font-family='Arial' font-size='14' font-weight='bold' fill='%23fff' text-anchor='middle'%3ENEW!%3C/text%3E%3C/g%3E%3C/svg%3E",
        category: "cat"
    },
    {
        id: 6,
        name: "Aquarium Castle Decor",
        price: 550,
        // Render: Detailed Stone Castle
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 350'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23424242'/%3E%3Cstop offset='100%25' stop-color='%239e9e9e'/%3E%3C/linearGradient%3E%3Cfilter id='b'%3E%3CfeDropShadow dx='0' dy='10' stdDeviation='10' flood-color='%23000' flood-opacity='.5'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='500' height='350' fill='%23e0f7fa'/%3E%3Cpath d='M0 250h500v100H0z' fill='%2300838f'/%3E%3Cg filter='url(%23b)'%3E%3Cpath d='M150 280V120l50-40 50 40v160h-20v-60h-60v60h-20zM320 280V150l40-30 40 30v130h-80z' fill='url(%23a)'/%3E%3Crect x='140' y='280' width='260' height='40' fill='%23212121'/%3E%3Cpath d='M230 280v-60h40v60h-40z' fill='%23000'/%3E%3Cg fill='%232e7d32' opacity='.6'%3E%3Cpath d='M150 280l30-50h-30z'/%3E%3Cpath d='M400 280l-30-70h30z'/%3E%3Cpath d='M200 80l20 30h-40z'/%3E%3Cpath d='M360 120l20 30h-40z'/%3E%3C/g%3E%3C/g%3E%3Cpath d='M150 120h100M150 160h100M320 150h80M320 190h80' fill='none' stroke='%23212121' stroke-width='2'/%3E%3C/svg%3E",
        category: "fish"
    }
];