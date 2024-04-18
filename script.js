function submitTemperature() {

    const temperatureInput = document.getElementById('temperature');
    const temperature = temperatureInput.value;

    if (!temperature) {
        alert('Invalid. Please enter the temperature.');
    } else {
        const displayParagraph = document.getElementById('display');
        displayParagraph.textContent = `You entered: ${temperature}°C`;
    }

}

function getOutfit() {
    var hiddenText = document.getElementById("outfits");
    hiddenText.style.display = "block";
    const temperatureInput = document.getElementById('temperature');
    let temperature = parseInt(temperatureInput.value, 10);

    const precipitationInput = document.getElementById('precipitation');
    const precipitation = precipitationInput.value;

    const conditionInput = document.getElementById('condition');
    const condition = conditionInput.value;

    if (precipitation === 'Rainy') { // ignore temp if rainy
        rainy();
    } else if (precipitation === 'Snowy') { // ignore temp if snowy 
        snowy();
    } else  {
        if (condition === 'Windy')  {
            temperature = temperature - 4;
        } else if (condition === 'Breezy') {
            temperature = temperature - 1;
        } 

        if (temperature <= 5) {
            winter();
        } else if (temperature <= 15) {
            fall();
        } else if (temperature <= 22) {
            spring();
        } else if (temperature > 22) {
            summer();
        }
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Generate an array of numbers from 1 to 40
  const numbersArray = Array.from({ length: 24 }, (_, i) => i + 1); // '<a href="">'
  
  // Shuffle the array
  const shuffledNumbers = shuffleArray(numbersArray);
  
  // Select the first 8 numbers
  const randomNumbers = shuffledNumbers.slice(0, 8);

const snowyArray = [
    '<a href="https://www.bridelily.com/products/new-faux-fur-coats-apricot-long-sleeves-jewel-neck-women-long-coat-fc0067?variant=41528059822233">',
    '<a href="https://www.geyedan.com/products/2023-womens-winter-thickened-lamb-fur-jacket-new-sheepskin-suede-leather-coat-fashion-lamb-fleece-parka-women-outerwear?variant=d01e6986-761b-4c9d-a791-24291d9b7d9b">',
    '<a href="https://www.streetwear-society.store/en-ca/products/vintage-print-zip-up-short-knit-cardigan?variant=43852112199938">',
    '<a href="https://www.updatefortress.com/products/womens-hoodie-new-loose-zipper-lazy-style-jacket-stand-up-collar-embroidered-versatile-lamb-cashmere-9drk?variant=a7ee4191-1e1a-439d-a1e2-21d19d78f89f">',
    '<a href="https://www.biandei.com/products/winter-bread-clothing-women-oversized-white-loose-down-cotton-coat-2023-new-fashion-stundent-short-blue-thick-warmth-hooded-coat?variant=c4cc815d-6d55-4307-8caf-6f517e8ac6b3">',
    '<a href="https://kol.deals/en-ca/products/arctix-womens-insulated-snow-pants?variant=40312879644826">',
    '<a href="https://poshmark.com/listing/White-fur-winter-hat-5a178d55b4188e681e04b8f1?epik=dj0yJnU9RUJWVUk1V0xFSmdSWm5TaGYtbUg0WGVLcUZEeTBxVlImcD0wJm49MkQwMDFjTFd4ZjVSejRIRi1oZDlwdyZ0PUFBQUFBR1loUHdV">',
    '<a href="https://www.amazon.com/UGG-Classic-Platform-Fashion-Chestnut/dp/B0BGJ46N2N/ref=sr_1_7?qid=1697491812&amp%3Bs=fashion-womens-intl-ship&amp%3Bsr=1-7&_encoding=UTF8&tag=paige2807-20&linkCode=ur2&linkId=9db7673fb3addad603bc23480b1a02ac&camp=1789&creative=9325">',
    '<a href="https://www.biandei.com/products/comyee-vintage-wool-blend-coat-women-fall-outfits-2023-winter-long-sleeve-lapel-long-jacket-female-korean-fashion-elegant-loose-oversized-overcoat?variant=1c1b9eca-3845-4ceb-8708-73339e30a813">',
    '<a href="https://clzwx.com/en-ca/products/beautiful-stylish-pretty-hemp-pattern-casual-sweaters?variant=47346327650587">', 
    '<a href="https://www.kukombo.com/products/christmas-gift-bgteever-casual-warm-loose-floor-length-sweater-pants-for-women-autumn-winter-high-waist-wide-leg-knitted-trousers-femme-2021?variant=40461176504529">', 
    '<a href="https://www.rails.com/products/krista-pant-light-heather-grey?variant=42401265189033">', 
    '<a href="https://www.amazon.com/Unisex-Winter-Toasty-Glitter-Fleece/dp/B07T1B81Y2/ref=sr_1_7?dib=eyJ2IjoiMSJ9.-rdUVmTjfObywzeBC99tn1KwcdoCIl0dw3mRuclqPV16V6edVCHq3W1NQaa7Gv6P56fGJaBAYEICyDgqqgvnwC_wHxY1YSNbX0mvdzUMjhHL0giEYK2KvuOMPcqKmn8Hr8aHoriPyDQcCbRaFjPi-eDQkx7GNFs2vg3babM3lg2G6lQhvQBteg-tR3DDFf25YAd70N93vNgBfhgn8QrVkMYuJyw_bcdTFQ9X540ny0am0f-Om_5__1RhT_7alcTJM-DQGLcLJZxI0MLtBKh83R-sejgi_GMfYfFZXcTWZmg.XcJtscRfhuKEx9ocyGwhMgzdZYODtGqQ-y75pCtiCnk&dib_tag=se&keywords=white+mittens&qid=1713455801&sr=8-7">', 
    '<a href="https://us.shein.com/New-Winter-Arrival-Korean-Style-Short-Plaid-Scarf-With-Fringe-Warm-Thick-Shawl-p-25810571-cat-1872.html?utm_source=pinterest.com&utm_medium=cpc&utm_campaign=web_uspin_dpa_womenaccessory_sc2310266733702350&url_from=web_uspin_dpa_womenaccessory_sc2310266733702350&epik=dj0yJnU9SUktVXVWMFpOamIxUHVrMmhURGYtcTJhd0F1cE1JUkomcD0wJm49Z3NBY1dzQTExNEdVYkRKdm5OZGk4QSZ0PUFBQUFBR1loUTFr">', 
    '<a href="https://us.shein.com/1pcs-Collapsible-earmuffs-Simple-plush-earmuffs-for-winter-warmth-and-windproof-protection-for-men-and-women-p-22948006-cat-6071.html?utm_source=pinterest.com&utm_medium=cpc&utm_campaign=uspin_dpa_womenaccessory_sc2309050000055581&url_from=uspin_dpa_womenaccessory_sc2309050000055581&epik=dj0yJnU9WUFRUEQ3Y0lpZm5PUm13SHRUTXN0YlJHTDBDY3NGS2cmcD0wJm49NEp4MENlenVMVy1wMmNVYXNkbTdHQSZ0PUFBQUFBR1loUTdj">', 
    '<a href="https://www.creamyheart.com/products/color-metal-high-waist-straight-jeans?variant=40279942889566">', 
    '<a href="https://www.whistles.com/row/product/ida-short-quilted-coat-35392.html">', 
    '<a href="https://www.thenorthface.com/en-ca/womens/womens-jackets-and-vests/womens-insulated-and-down-c299277/womens-hydrenalite-down-hoodie-pNF0A5GGG?color=JK3">',
    '<a href="https://www.snowshred.com/products/womens-air-pose-prime-baggy-snowboard-pants?variant=44409291538691">',
    '<a href="https://soolinen.com/products/elegant-oversize-snow-jackets-winter-outwear-chocolate-stand-collar-zippered-down-coat?_pos=1&_sid=55e766736&_ss=r&epik=dj0yJnU9Umo4cWFkaWQ0S0tLMl9XSnBmZG0tVkwxZDhKbC1PUHcmcD0wJm49bkkxXzhaZDlob25PZmJYa0MyODdnZyZ0PUFBQUFBR1loWE1F">',
    '<a href="https://www2.hm.com/en_us/productpage.1195001005.html?utm_source=rakuten&utm_medium=affiliate&utm_campaign=3254725_Who+What+Wear+UK_pi_XXA19ACX3AA243&utm_content=10&utm_term=UK_Network&ranMID=43250&ranEAID=2P555SNI1Kc&ranSiteID=2P555SNI1Kc-9pPC7APJPyo9kzC81TBZ7Q">',
    '<a href="https://us.shein.com/1pc-Women-s-Guernsey-Color-Block-Plush-Warm-Knitted-Hat-With-Ear-Protection-For-Riding-Thick-Knit-Trapper-Hat-For-Christmas-And-Winter-Outdoor-Activities-Boho-p-23907383-cat-6128.html?utm_source=pinterest.com&utm_medium=cpc&utm_campaign=web_uspin_rmt_dpa_womenaccessory_sc2309180936111716&url_from=web_uspin_rmt_dpa_womenaccessory_sc2309180936111716&epik=dj0yJnU9Q0xzYjQ5T20yNUlOUkt5MFl3MGNtdHpjc04yTDRJT1EmcD0wJm49SGFBLVRJclRtMjltNTl5T3JZSnZudyZ0PUFBQUFBR1loWHln">',
    '<a href="https://www.ssense.com/en-ca/women/product/stand-studio/off-white-khalessi-coat/10316231?epik=dj0yJnU9ZkJkWnB6UEs2RHR6QVNXdDNHMWFabVlKeUU4VzdCem8mcD0wJm49VGRLenRYNjctdDhuMXpzcXdWTGxFdyZ0PUFBQUFBR1loWHl3">',
    '<a href="https://www.softmoc.com/ca/i/ugg-lds-tasman-sheepskin-slipper--chestnut/5955che?gad_source=1&gclid=Cj0KCQjwiYOxBhC5ARIsAIvdH52FBEjqK0H9z27hFJXEJ-jYyzbneNZLZLNDUaqh1unfY3L5t15nsWcaAp9BEALw_wcB">'
];

const rainyArray = [
    '<a href="https://www.buyma.us/items/79c885d7-d875-4a57-9c01-7c542736ca7d/?epik=dj0yJnU9Y1lzSEVfdkNzaTFxN09QOWRFR0wtMHdVakRaM2ZDb2EmcD0wJm49bjFRSWVqU2t0SWQzYTRfUGF0ak1OUSZ0PUFBQUFBR1loT01V#&gid=null&pid=2">',
    '<a href="https://www.jikecredit.com/products/bahitlik-trench-coats-for-women-2023-fall-winter-new-korean-long-sleeve-turn-down-collar-coats-loose-button-up-long-thicken-office-jacket?variant=36da45b5-fb07-40b2-84ba-1eabfba394e7">',
    '<a href="https://www.hongbaochi.com/products/coffee-down-jacket-fur-integrated-2024-winter-new-faux-fur-collar-fashion-fur-warm-coat-for-women-fur-jackets-khaki-high-quality?variant=1f997e25-8c2d-4eb7-b1ea-c607e8deea96">',
    '<a href="https://www.biandei.com/products/rttbuy-high-end-heavy-cashmere-sweater-women-round-neck-2023-fall-winter-straight-tube-lazy-wind-large-size-thick-pullover-loose-sweate?variant=737cfb35-d951-45d1-b812-891dfc909af3">',
    '<a href="https://www.geyedan.com/products/zoki-women-autumn-knit-crop-cardigan-sweater-y2k-korean-chic-slim-single-breasted-v-neck-tops-fashion-solid-long-sleeve-cardigan-rzt3?variant=6c27c1e0-1d10-4f92-aa27-95e89ac56ceb">',
    '<a href="https://www.ueong.com/products/ueong-2022-summer-retro-khaki-cargo-skirts-women-casual-y2k-fairycore-straight-maxi-skirts-streetwear-grunge-clothes-aesthetic?variant=8f5832e0-fed4-4532-b9c1-2f2b46c16b8f">',
    '<a href="https://somemoment.com/products/waterproof-brown-coat">',
    '<a href="https://www.geyedan.com/products/winter-new-women-high-end-horn-button-woolen-coat-fashion-pink-plaid-hooded-long-outcoat-loose-casual-versatile-outerwear?variant=ea642f57-c5b8-441d-a7a1-318a9a190ff0">',
    '<a href="https://www.balenciaga.com/en-ca?epik=dj0yJnU9Ylc2ZkVRdklnLU1EajJ2UkUyYTN3RmI4aUg4WnV2cFomcD0wJm49RmtjSFRZLW5pYjJkZThscjByTy0yZyZ0PUFBQUFBR1loUFBR">',
    '<a href="https://www.bridelily.com/products/faux-fur-coats-for-women-long-sleeves-casual-turndown-collar-apricot-winter-coat-fc0101?variant=41528075714713">', 
    '<a href="https://www.bohoome.com/products/korean-fashion-women-casual-loose-woolen-coat-elegant-and-chic-solid-outerwear-long-overcoat-with-belted-female-warm-cloak?variant=1f54354e-6397-4832-9c80-8a01eb805137">', 
    '<a href="https://rarove.com/products/vintage-buckle-check-plaid-short-women-blazer-cropped-irregular-cross-slit-mini-skirt-long-sleeve-suits-2-pieces-set?variant=43477821391075">', 
    '<a href="https://noblemars.com/products/s50gp0263-s17850-707f-wool-quarter-zip-sweater?variant=42138331840724">', 
    '<a href="https://lojyshop.com/en-ca/products/women-s-thousand-bird-check-breasted-loose-knit-cardigan-sweater?variant=40319892455506">', 
    '<a href="https://lojyshop.com/en-ca/products/women-s-thousand-bird-check-breasted-loose-knit-cardigan-sweater?variant=40319892455506">', 
    '<a href="https://www.anotherchill.com/products/vintage-faded-wash-straight-leg-boyfriend-jeans?variant=43727272411370&om=5513&utm_source=pinterest&utm_medium=original&utm_campaign=custom_feed">', 
    '<a href="https://www.ssense.com/en-ca/women/product/rag-and-bone/navy-casey-jeans/14190981?epik=dj0yJnU9QWFYSm1RTVFnVFJxdW11QWpyX3M0V2VoNmZlVTRLOWomcD0wJm49SU5SZWQ5R0xrU0dyRVFMMkVjQ0Q4USZ0PUFBQUFBR1loUkJn">', 
    '<a href="https://kittenalarm.com/products/olu-buttoned-cardigan?variant=47231328223510">',
    '<a href="https://beyondfashion.io/products/1-chic-ven-women-woolen-coat-loose-casual-single-breasted-new-vintage-polo-collar-plaid-female-overcoat-autumn-winter-2023?variant=42724978753709">',
    '<a href="https://www.fashionlaura.com/products/vintage-corduroy-baggy-pants?variant=42341265440820">',
    '<a href="https://www.oliviamark.com/products/hp-hfr50761/?epik=dj0yJnU9bXMxUDlXTjc3VndhWmx6T2RMc2ZPSGFMSDFwOHZ5RXAmcD0wJm49eTZIYkJIcUdXYUNBTzVpMFR2NVdKdyZ0PUFBQUFBR1loV2tz">',
    '<a href="https://www.oliviamark.com/products/hp-hfr50761/?epik=dj0yJnU9bXMxUDlXTjc3VndhWmx6T2RMc2ZPSGFMSDFwOHZ5RXAmcD0wJm49eTZIYkJIcUdXYUNBTzVpMFR2NVdKdyZ0PUFBQUFBR1loV2tz">',
    '<a href="https://ntbhshop.com/en-ca/products/kuromi-my-melody-cinnamoroll-friends-sweatpants-ntbhshop?variant=42707077005545">',
    '<a href="https://www.poppyrum.com/products/slim-jeans-skirt-shorts-women-summer-short?variant=43360213369022&currency=USD&utm_source=pinterest&utm_medium=cpc&utm_campaign=google%2Bshopping">'
];

const winterArray = [
    '<a href="https://www.biandei.com/products/beige-down-jacket-women-coat-yellow-hooded-fashion-american-streetwear-y2k-style-duck-down-feather-female-winter-short-outwear?variant=745411dc-ee69-4ab8-b9f1-1db471919301">',
    '<a href="https://www.hongbaochi.com/products/gidyq-women-thick-warm-down-jacket-winter-korean-casual-streetwear-female-loose-parkas-fashion-student-horn-button-puffty-coats?variant=5424acd7-d510-48cc-92ab-ce57eeb0db77">',
    '<a href="https://us.shein.com/Gingham-Zip-Up-Puffer-Coat-p-2703834-cat-2769.html?utm_source=pinterest.com&utm_medium=cpc&utm_campaign=uspin_dpa_women_swouter30210517140&url_from=uspin_dpa_women_swouter30210517140&epik=dj0yJnU9VUtHV0xOUk9weEpzV2FtMFBrTWNnQmM5SXE1azBKeDImcD0wJm49c2gyS1VPbU10Q2IzdHZJVDI5eHhTdyZ0PUFBQUFBR1loSUZ3">',
    '<a href="https://www.streetwear-society.store/en-ca/products/vintage-brown-lapel-neck-zip-up-leather-jacket?variant=44081094918402">',
    '<a href="https://www.calonias.com/products/bahitlik-down-jacket-women-short-bread-clothing-winter-down-coat-warm-solid-korean-fashion-girls-fluffy-jacket-loose-high-quality-new?variant=2de9b173-a314-492d-9c0f-120b638d3cf0">',
    '<a href="https://www.bridelily.com/products/faux-fur-coats-for-women-long-sleeves-casual-turndown-collar-apricot-winter-coat-fc0101?variant=41528075714713">',
    '<a href="https://www.updatefortress.com/products/women-fake-two-piece-detachable-hat-woolen-coat-winter-female-long-below-the-knee-double-breasted-thicken-fashion-loose-outwear?variant=16d63b1e-95fa-4b26-af97-1af75ff5f948">',
    '<a href="https://www.bahitlik.com/products/2023-new-winter-down-cotton-jackets-women-oversized-loose-casual-korean-fashion-coats-windproof-thick-warm-puffer-parkas-female?variant=246cb488-6170-422a-a666-c000a6e64b0a">',
    '<a href="https://shop.lululemon.com/en-ca/p/jackets-and-hoodies-jackets/Lightweight-Oversized-Coaches-Jacket-MD/_/prod11710091?color=0001&sz=L&cid=pinterest-pro_cgnn-EVRGN_TOF_DM_adsn-CA_NAT_W_INT_adn-ALWYSON_DPA_PROSSHOP&pp=0&epik=dj0yJnU9a21IdlFHVG9pWkpJOXV2cjV6bV8yUmpFYzZTcmo1UVUmcD0xJm49OFMydWU4UXQtV1g0cGwwQnExRFFhQSZ0PUFBQUFBR1loSTJN">',
    '<a href="https://www.hongbaochi.com/products/deeptown-vintage-pleated-mini-skirt-women-kawaii-high-waist-korean-fashion-cute-sexy-grey-mini-skirts-school-uniform-autumn?variant=2a2e1402-1535-4174-9d65-beead76c6a9d">', 
    '<a href="https://bananarepublic.gapcanada.ca/browse/product.do?pid=754435013&vid=1&tid=bcsm000042&pin_cid=626750251632&adgroup_id=2680078267855&adid=4260608263666&pp=0&epik=dj0yJnU9MWRVQWQ4ZE52cDNyS3dhYkZXUkdGUS1fdDBNOWtRY1MmcD0xJm49T0lJYWF1M2RmNzIzdzBBRVZqR0lxQSZ0PUFBQUFBR1loSkZj#pdp-page-content">', 
    '<a href="https://www.updatefortress.com/products/fashion-womens-coat-bomber-autumn-winter-o-neck-long-sleeve-female-coats-2023-streetwear-pocket-solid-loose-lady-jackets?variant=0d88bfad-2417-41af-bf7d-044ea27c13cc">', 
    '<a href="https://www.biandei.com/products/fashion-korean-stand-collar-parkas-women-winter-thick-warm-preppy-solid-solid-jacket-bf-loose-zipper-all-match-outerwear?variant=16d79f94-a263-452a-b1ce-76c252260539">', 
    '<a href="https://www.hongbaochi.com/products/autumn-winter-elegant-women-solid-medium-length-woolen-coat-thicken-warm-vintage-plus-size-double-breasted-cardigan-overcoat-new?variant=42633ba2-a84d-4ead-8458-ebc5d5a84876">', 
    '<a href="https://www.geyedan.com/products/split-100-pure-wool-knitted-wide-leg-pants-for-women-with-high-waist-and-long-mop-pants-in-autumn-and-winter?variant=5f4912a5-8a41-4fae-976e-0720711e7e51">', 
    '<a href="https://www.piramide.com.br/casaco-sobretudo-levis-xadrez?parceiro=9399&epik=dj0yJnU9MVRYNC05ZXZUVk5fVG05M29sM3hwZms2cTMzSlFzSkImcD0wJm49NE5FMk9EMVFGMEcxRnRjc3g2M2xtUSZ0PUFBQUFBR1loS0FJ&variant_id=87775">', 
    '<a href="https://wnkrs.com/en-ca/products/womens-classic-style-coat?variant=44402968396029">', 
    '<a href="https://harmonygallery.net/en-ca/products/horn-buckle-plaid-mid-length-woolen-womens-coat-0157?variant=42841016107251">',
    '<a href="https://pastelkitten.com/en-ca/products/winter-pastel-woollen-coat?variant=44956723347723">',
    '<a href="https://www.onetify.com/products/womens-faux-fur-jacket-with-vegan-leather-trimmed-cuffs?variant=42569281634482&epik=dj0yJnU9WG9yT3o5LTNjVlJhUjBac18waDFIXzhaQ3YwMC1pYjAmcD0wJm49azlUbG0tZ0NQX0xXYnkzN2ZCMWJOZyZ0PUFBQUFBR1loVXNN&utm_source=pinterest&utm_medium=social">',
    '<a href="https://www.geyedan.com/products/2023-winter-down-jacket-womens-warm-coats-loose-short-jacket-cotton-thicken-parkas-coats-plus-size-solid-casual-female-outwear?variant=0ff7b3be-0123-433b-a0f6-a8bd1b76ea84">',
    '<a href="https://www.itsshirty.com/en-ca/products/vintage-vogue-fringe-fusion-scarf?variant=47240060076323">',
    '<a href="https://www.updatefortress.com/products/autumn-winter-womens-lamb-wool-jacket-korean-style-streetwear-o-neck-faux-fur-coat-woman-warm-thick-furry-fluffy-coat-jackets?variant=8abbf306-b95a-4b7a-8b3a-1edbdae11667">',
    '<a href="https://forhera-design.com/products/mens-and-womens-thickened-warm-plaid-scarves?variant=44827928625456">'
];  

const springArray = [
    '<a href="https://clothern.com/en-ca/products/elegant-office-style-all-cotton-women-blouses-shirts?variant=48219961852187">',
    '<a href="https://www.updatefortress.com/products/vintage-college-style-jacket-women-autumn-long-sleeve-drawstring-corduroy-coats-female-korean-fashion-casual-streetwear-shirts?variant=ebbaf251-728d-40d7-8747-c32b49e42b7f">',
    '<a href="https://www.hongbaochi.com/collections/sweater/products/winter-new-women-knitted-cardigan-casual-loose-v-neck-single-breasted-sweater-coat-female-lantern-sleeve-warm-sweaters?cfb=0a0325b2-2ccc-4297-8507-cf732bbc101b&scm=collection.v29.177.202.203.204&score=0.037037037037037035&ssp=-&spm=..collection_dc58fcdc-2592-49cc-b270-4e5d79651695.collection_1.27&spm_prev=..collection_2713049c-02d4-4564-97b6-6c5ff76aa086.header_1.1">',
    '<a href="https://www.hongbaochi.com/collections/sweater/products/women-buttons-stripes-sweater-long-puff-sleeve-round-neck-loose-all-match-female-jumpers-fall-winter-2023?cfb=399786d0-a8b4-4cd4-91af-730c856d8fb0&scm=collection.v29.177.202.203.204&score=0.02857142857142857&ssp=-&spm=..collection_dc58fcdc-2592-49cc-b270-4e5d79651695.collection_1.35&spm_prev=..product_01fe5c72-9e12-4a66-a2bd-7ff4fd0db0c4.header_1.1">',
    '<a href="https://www.amazon.com/dp/B07WVCGWP4">',
    '<a href="https://lojyshop.com/en-ca/products/sexy-backless-strapless-slimming-tube-top-with-vest?variant=40603759804498">',
    '<a href="https://www.creamyheart.com/products/short-long-sleeves-breasted-solid-color-knit-cardigan?variant=40284971532382">',
    '<a href="https://juneptune.com/en-ca/products/coquette-pink-long-sleeve-lace-top?variant=44532993851659">',
    '<a href="https://tomscloth.com/products/high-waist-loose-big-pocket-pants">',
    '<a href="https://www.biandei.com/products/y2k-wide-leg-jeans-womens-autumn-new-loose-japanes-harajuku-high-waist-slim-wide-leg-straight-mopping-pants?variant=7f942741-afb5-432d-b900-0b39b71f08a0">', 
    '<a href="https://westonmain.ca/products/clear-eyes-denim-midi-skirt-cream?variant=41023565791293">', 
    '<a href="https://www.uoozee.com/products/a-line-high-waisted-pleated-solid-color-split-joint-skirts-neb4?pp=0&epik=dj0yJnU9bkpZbXk4cXdmNkFrQ292VmdfOFRuenpqRjdyNkJhNHcmcD0xJm49N0ExN1NCQjNfemdSWDdaZUVJbEFfZyZ0PUFBQUFBR1loTUM4">', 
    '<a href="https://shop.kawaiimoristore.com/en-ca/products/bubblefruit-puff-sleeve-summer-mini-dress?variant=41018569457835">', 
    '<a href="https://www.creamyheart.com/products/short-long-sleeves-breasted-solid-color-knit-cardigan?variant=40284971532382">', 
    '<a href="https://www.hongbaochi.com/products/deeptown-sexy-split-pleated-miniskirt-women-preppy-high-waist-a-line-slim-micro-outdoor-sex-skirt-pants-summer-outfits-club-wear?variant=e86dd716-6aee-400c-abcd-70718d898695">', 
    '<a href="https://www.biandei.com/products/square-collar-t-shirt-women-korean-style-ladies-tops-slim-t-shirts-fall-2023-elastic-long-sleeve-tees-female-camisetas-de-mujer?variant=852c0925-dcea-420a-858f-7fb488727e52">', 
    '<a href="https://www.mytheresa.com/gb/en/women/alexander-mcqueen-midi-skirt-black-p00695920?epik=dj0yJnU9Vk91WUYtMnRDdHlqY2x2WVhFb0R0LXFsdFU4TEQ4a0smcD0wJm49dEMyd0tnSk9tSkhlRF9qU3c0QXhXdyZ0PUFBQUFBR1loT0FZ">', 
    '<a href="https://www.hongbaochi.com/products/vimly-new-in-matching-sets-lyocell-blazer-suit-summer-outfits-for-women-2023-print-sundress-slip-midi-dresses-two-piece-sets?variant=33ffd606-5ac1-4396-85e6-01b836857365">',
    '<a href="https://danier.com/products/nina">',
    '<a href="https://www.shopthecic.com/collections/new/products/washed-multi-pocket-wide-leg-denim-work-pants">',
    '<a href="https://forhera-design.com/products/womens-fashion-hip-slim-fit-suspender-dress?variant=46511020900656">',
    '<a href="https://www.ccovv.com/products/cartoon-princess-print-summer-tops?fec_currency_code=CAD&amp%3Bvariant=789394">',
    '<a href="https://www.fashionlaura.com/products/splice-straight-leg-cargo-jeans?variant=42340964270132&currency=USD">',
    '<a href="https://www.updatefortress.com/products/girlish-style-ruffled-chiffon-blouse-women-elegant-slash-neck-puff-sleeved-blouses-white-woman-cute-summer-short-tops?variant=fc825015-07c6-496f-9186-6837672e8267">'
];
    
const summerArray = [
    '<a href="https://www.bocfutures.com/products/women-clothing-white-tanks-fashion-summer-camis-backless-sling-vest-sweet-ruffles-loose-sexy-korean-tops-2024-ropa-mujer?variant=c70a44a2-d141-4a6d-87be-c7e8e2d50484">',
    '<a href="https://www.biandei.com/products/summer-oversized-tops-blouses-for-women-lace-hollow-out-puff-sleeve-thin-white-shirts-2023-blusas-mujer-de-moda-vintage-blouse?variant=baf9ed7a-7139-4c9f-ba5b-66cf1f44d2ea">',
    '<a href="https://www.creamyheart.com/products/loose-fit-non-stretch-casual-wide-legs-pant-jeans?variant=40279799136350">',
    '<a href="https://www.fashionlaura.com/products/high-waist-baggy-boyfriend-jeans?variant=42340225515572&currency=USD">',
    '<a href="https://clzwx.com/en-ca/products/lapel-long-sleeve-solid-color-two-piece-suits?variant=46070177071387">',
    '<a href="https://berrybetty.com/products/prink-shirt-for-women-2023-new-long-sleeve-turn-down-collar-oversized-blouses-office-ladies-korean-fashion-casual-top?variant=44374578004221">',
    '<a href="https://lojyshop.com/en-ca/products/wood-ear-side-pleated-sleeves-waist-tight-irregular-hem-cake-skirt-dress?variant=40520349024338">',
    '<a href="https://www.hongbaochi.com/collections/t-shirts/products/long-sleeve-t-shirts-women-y2k-sexy-slim-fit-tops-thin-cardigan-korean-style-knitted-sweaters-cozy-all-match-casual-camisetas?cfb=56d252b8-e9d5-4d8c-963e-5c6e37c17cc6&scm=collection.v29.177.202.203.204&score=0.1&ssp=-&spm=..collection_f9af04df-6ffb-4322-af5e-d51484a63bce.collection_1.10&spm_prev=..collection_54a4897c-b69a-43cd-8b0f-0a53f6951cdb.header_1.1">',
    '<a href="https://www.hongbaochi.com/collections/t-shirts/products/long-sleeve-t-shirts-women-y2k-sexy-slim-fit-tops-thin-cardigan-korean-style-knitted-sweaters-cozy-all-match-casual-camisetas?cfb=56d252b8-e9d5-4d8c-963e-5c6e37c17cc6&scm=collection.v29.177.202.203.204&score=0.1&ssp=-&spm=..collection_f9af04df-6ffb-4322-af5e-d51484a63bce.collection_1.10&spm_prev=..collection_54a4897c-b69a-43cd-8b0f-0a53f6951cdb.header_1.1&variant=7b3af35b-d1bd-4459-9add-f7825aa17803">',
    '<a href="https://www.hongbaochi.com/products/sweet-tank-womens-clothing-sleeveless-sling-summer-vest-loose-ruffles-fashion-camis-korean-cute-y2k-tops-2024-ropa-mujer?variant=061a46e1-d68f-400d-b6c3-713492c842dd">', 
    '<a href="https://www.fashionlaura.com/products/strapless-boned-mesh-bustier-corset-crop-top?variant=42343792443444">', 
    '<a href="https://www.girlhomeshop.com/en-ca/products/white-a-line-prom-dress-evening-dress-gh2908?variant=44917167227120">', 
    '<a href="https://shop.kawaiimoristore.com/en-ca/products/bubblefruit-puff-sleeve-summer-mini-dress?variant=41018569457835">', 
    '<a href="https://fashionsierra.com/products/ladies-vintage-boho-plaid-summer-dress-women-sexy-backless-casual-ruffles-party-beach-sundress-women-dress-robe-vestidos-female?variant=43952620142834">', 
    '<a href="https://www.yesstyle.com/en/info.html/pid.1109973330?utm_source=Pinterest&utm_campaign=Product_Tag">', 
    '<a href="https://instylebuy.com/product/all-match-sling-frenum-tops-loose-vertical-stripes-shirt/?utm_source=Pinterest+Shopping&utm_medium=cpc&utm_campaign=United+States">', 
    '<a href="https://www.anotherchill.com/products/chiffon-floral-print-midi-skirt?variant=42197356642538&om=5513&utm_source=pinterest&utm_medium=original&utm_campaign=custom_feed">', 
    '<a href="https://www.mackandharvie.com/en-ca/products/spaghetti-strap-ruched-hankerchief-top?variant=44665600835808">',
    '<a href="https://shopshekou.com/products/wild-and-free-dress?variant=40760384356400">',
    '<a href="https://www.revolve.com/puffer-than-you-dress/dp/BBDA-WD1092/?d=Womens&cjdata=MXxOfDB8WXww&AID=12527506&PID=100815679&utm_medium=affiliate&utm_source=cj&source=cj&utm_campaign=glob_p_6431646&cjevent=d83613fcfda911ee81dd008f0a82b838">',
    '<a href="https://www.fashionlaura.com/products/sheer-knit-wide-leg-pants?variant=42341425807412&currency=USD">',
    '<a href="https://www.shopemeryrose.com/productDetails/317060?utm_source=pinterest.com&utm_medium=cpc&utm_campaign=women_emeryrose_pinadsusdpapcmpaswshorts04210115784&url_from=women_emeryrose_pinadsusdpapcmpaswshorts04210115784">',
    '<a href="https://erinmade.com/products/patchwork-tote?variant=39775871729758&utm_source=pinterest&utm_medium=social">',
    '<a href="https://www.shopthecic.com/collections/dress/products/office-v-neck-long-sleeves-knitted-dress">'
];

const fallArray = [
    '<a href="https://www.quizzgirls.com/products/high-quality-vintage-solid-cardigan-crop-women-v-neck-single-breasted-casual-loose-thick-sweater-knitwear-elegant-winter-clothes?variant=409b90d5-0814-4f30-b8f5-c6d51d21a77d">',
    '<a href="https://www.amazon.com/ZESICA-Fashion-Turtleneck-Pullover-KhakiPlaid/dp/B0BRYVXBF9?crid=15CMSXZM56A80&keywords=fall+clothes+for+women+2023&qid=1691976262&sprefix=fall,aps,209&sr=8-6&linkCode=sl1&tag=jocelynpier07-20&linkId=5648967bf5482e7a6a316ab1ba17fcd6&language=en_US&ref_=as_li_ss_tl">',
    '<a href="https://www.geyedan.com/products/korean-chic-thick-puffy-vest-women-winter-warm-streetwear-parkas-jacket-simple-loose-zipper-casual-cotton-down-solid-vest?variant=e023ced1-c372-46a0-a770-27aa39dd9174">',
    '<a href="https://www.shopthecic.com/products/brown-woolen-shawl-collar-batwing-sleeve-cardigan-jacket?variant=47617173913919&utm_source=pinterest&utm_medium=organic&utm_campaign=pinterest+feed+ca&utm_content=Brown+Woolen+Shawl+Collar+Batwing+Sleeve+Cardigan+Jacket">',
    '<a href="https://nadaoutfitland.com/products/high-waist-vintage-loose-casual-skirts">',
    '<a href="https://www.streetwear-society.store/en-ca/products/jean-boyfriend-ample-taille-haute?variant=43616056574210">',
    '<a href="https://www.updatefortress.com/products/coats-woman-winter-2023-fashion-solid-color-imitation-lamb-wool-coat-thickened-medium-long-coat-for-women-jackets-woman-clothes-x4gb?variant=36d0641a-b5c2-4da7-98a8-8b28059aee7d">',
    '<a href="https://www.onetify.com/products/womens-round-neck-cable-knit-batwing-sweater?variant=42243855483058&epik=dj0yJnU9aGlMVDZxOTgxNTRMYnd0dkJkd3I1RUJWc2JKcXBnT0cmcD0wJm49UEVlZHg4dnpDTEs5MklfRXpNb3d4ZyZ0PUFBQUFBR1lnM044&utm_source=pinterest&utm_medium=social">',
    '<a href="https://www.hongbaochi.com/products/vintage-crop-cardigan-women-pull-femme-o-neck-long-sleeve-knitting-patchwork-sweaters-jackets-ropa-mujer-fashion-korean-y2k-tops?variant=04489d57-dd62-4341-9db2-659132b50e43">',
    '<a href="https://ntbhshop.com/en-ca/products/balbina-blouse-dress-ntbhshop?variant=31904568311944">', 
    '<a href="https://www.hongbaochi.com/products/autumn-new-solid-color-slim-cardigan-woman-sweet-ladies-elegant-womens-cardigan-pink-oat-grey-black-street-cardigan?variant=85710bdd-7268-4be6-9c33-e36592988252">', 
    '<a href="https://www.nordstrom.com/s/zigzag-scarf/7605692?origin=category-personalizedsort&breadcrumb=Home%2FWomen%2FAccessories%2FScarves%20%26%20Wraps&color=250">', 
    '<a href="https://amyfashionshop.com/products/long-sleeve-oversized-knitted-basic-loose-cardigans?variant=44086423847156">', 
    '<a href="https://globalvillagekailua.com/en-ca/products/coffee-brown-button-down-shacket?variant=44423574847702">', 
    '<a href="https://www2.hm.com/de_at/productpage.1112476001.html?utm_source=rakuten&utm_medium=affiliate&utm_campaign=2575853_LTK_pi_XXA19ACX3AA243&utm_content=10&utm_term=DE_Network&ranMID=43149&ranEAID=QFGLnEolOWg&ranSiteID=QFGLnEolOWg-K.2dYq5Tok1jh6Dj6AR1BA">', 
    '<a href="https://ivaniasmode.com/en-en/products/gestreifte-kaschmirjacke?variant=44851647152380">', 
    '<a href="https://www.amazon.ca/Spring-Full-Length-Trousers-Waist26-8inch-6Apricot/dp/B0C7VK9KHC">', 
    '<a href="https://www.walmart.ca/en/ip/sunloudy-women-s-spring-autumn-casual-cargo-pants-mid-waist-multi-pockets-drawstring-straight-leg-pants/776QWSAD991E">',
    '<a href="https://www.etsy.com/ca/listing/1331311860/vintage-collection-100-organic-cotton?click_key=3ff592e8198d9380b19fef2fa17d6e13846af600%3A1331311860&click_sum=c32cd6c7&ref=shop_home_active_1&frs=1&crt=1">',
    '<a href="https://www.shopthecic.com/products/vintage-turtleneck-zippered-twist-knit-pullover?variant=47403471569215&utm_source=pinterest&utm_medium=organic&utm_campaign=pinterest+feed+ca&utm_content=Vintage+turtleneck+zippered+twist+knit+pullover">',
    '<a href="https://www.shopthecic.com/collections/tops/products/turtleneck-pullover-loose-base-knitted-sweater">',
    '<a href="https://www.girlhomeshop.com/en-ca/products/vintage-striped-sweater-womens-sweater-top-5123?variant=42187456676080">',
    '<a href="https://www.geyedan.com/products/twisted-sweater-women-autumn-winter-long-sleeve-knitted-pullovers-female-korean-fashion-vintage-casual-warm-oversized-knitwears?variant=311d3581-c656-4fb8-9c8f-edee2af5e73e">',
    '<a href="https://bennysbeautyworld.ca/products/fashion-women-sweaters-2023-loose-zipper-design-pullovers-casual-solid-turtleneck-thickening-pink-knitted-winter-womens-sweater?variant=44441646039297">'
];

function snowy() {
    return document.getElementById("result1").innerHTML = snowyArray[randomNumbers[0]-1]+'<img src=".\\images\\snowy\\snowy'+randomNumbers[0]+'.jpg">', 
    document.getElementById("result2").innerHTML = snowyArray[randomNumbers[1]-1]+'<img src=".\\images\\snowy\\snowy'+randomNumbers[1]+'.jpg">',
     document.getElementById("result3").innerHTML = snowyArray[randomNumbers[2]-1]+'<img src=".\\images\\snowy\\snowy'+randomNumbers[2]+'.jpg">',
      document.getElementById("result4").innerHTML = snowyArray[randomNumbers[3]-1]+'<img src=".\\images\\snowy\\snowy'+randomNumbers[3]+'.jpg">',
       document.getElementById("result5").innerHTML = snowyArray[randomNumbers[4]-1]+'<img src=".\\images\\snowy\\snowy'+randomNumbers[4]+'.jpg">',
        document.getElementById("result6").innerHTML = snowyArray[randomNumbers[5]-1]+'<img src=".\\images\\snowy\\snowy'+randomNumbers[5]+'.jpg">',
         document.getElementById("result7").innerHTML = snowyArray[randomNumbers[6]-1]+'<img src=".\\images\\snowy\\snowy'+randomNumbers[6]+'.jpg">',
          document.getElementById("result8").innerHTML = snowyArray[randomNumbers[7]-1]+'<img src=".\\images\\snowy\\snowy'+randomNumbers[7]+'.jpg">'; 
}

function rainy() {
    return document.getElementById("result1").innerHTML = rainyArray[randomNumbers[0]-1]+'<img src=".\\images\\rainy\\rainy'+randomNumbers[0]+'.jpg">', 
    document.getElementById("result2").innerHTML = rainyArray[randomNumbers[1]-1]+'<img src=".\\images\\rainy\\rainy'+randomNumbers[1]+'.jpg">',
     document.getElementById("result3").innerHTML = rainyArray[randomNumbers[2]-1]+'<img src=".\\images\\rainy\\rainy'+randomNumbers[2]+'.jpg">',
      document.getElementById("result4").innerHTML = rainyArray[randomNumbers[3]-1]+'<img src=".\\images\\rainy\\rainy'+randomNumbers[3]+'.jpg">',
       document.getElementById("result5").innerHTML = rainyArray[randomNumbers[4]-1]+'<img src=".\\images\\rainy\\rainy'+randomNumbers[4]+'.jpg">',
        document.getElementById("result6").innerHTML = rainyArray[randomNumbers[5]-1]+'<img src=".\\images\\rainy\\rainy'+randomNumbers[5]+'.jpg">',
         document.getElementById("result7").innerHTML = rainyArray[randomNumbers[6]-1]+'<img src=".\\images\\rainy\\rainy'+randomNumbers[6]+'.jpg">',
          document.getElementById("result8").innerHTML = rainyArray[randomNumbers[7]-1]+'<img src=".\\images\\rainy\\rainy'+randomNumbers[7]+'.jpg">'; 
}

function winter() {
    return document.getElementById("result1").innerHTML = winterArray[randomNumbers[0]-1]+'<img src=".\\images\\winter\\winter'+randomNumbers[0]+'.jpg">', 
    document.getElementById("result2").innerHTML = winterArray[randomNumbers[1]-1]+'<img src=".\\images\\winter\\winter'+randomNumbers[1]+'.jpg">',
     document.getElementById("result3").innerHTML = winterArray[randomNumbers[2]-1]+'<img src=".\\images\\winter\\winter'+randomNumbers[2]+'.jpg">',
      document.getElementById("result4").innerHTML = winterArray[randomNumbers[3]-1]+'<img src=".\\images\\winter\\winter'+randomNumbers[3]+'.jpg">',
       document.getElementById("result5").innerHTML = winterArray[randomNumbers[4]-1]+'<img src=".\\images\\winter\\winter'+randomNumbers[4]+'.jpg">',
        document.getElementById("result6").innerHTML = winterArray[randomNumbers[5]-1]+'<img src=".\\images\\winter\\winter'+randomNumbers[5]+'.jpg">',
         document.getElementById("result7").innerHTML = winterArray[randomNumbers[6]-1]+'<img src=".\\images\\winter\\winter'+randomNumbers[6]+'.jpg">',
          document.getElementById("result8").innerHTML = winterArray[randomNumbers[7]-1]+'<img src=".\\images\\winter\\winter'+randomNumbers[7]+'.jpg">'; 
}

function spring() {
    return document.getElementById("result1").innerHTML = springArray[randomNumbers[0]-1]+'<img src=".\\images\\spring\\spring'+randomNumbers[0]+'.jpg">', 
    document.getElementById("result2").innerHTML = springArray[randomNumbers[1]-1]+'<img src=".\\images\\spring\\spring'+randomNumbers[1]+'.jpg">',
     document.getElementById("result3").innerHTML = springArray[randomNumbers[2]-1]+'<img src=".\\images\\spring\\spring'+randomNumbers[2]+'.jpg">',
      document.getElementById("result4").innerHTML = springArray[randomNumbers[3]-1]+'<img src=".\\images\\spring\\spring'+randomNumbers[3]+'.jpg">',
       document.getElementById("result5").innerHTML = springArray[randomNumbers[4]-1]+'<img src=".\\images\\spring\\spring'+randomNumbers[4]+'.jpg">',
        document.getElementById("result6").innerHTML = springArray[randomNumbers[5]-1]+'<img src=".\\images\\spring\\spring'+randomNumbers[5]+'.jpg">',
         document.getElementById("result7").innerHTML = springArray[randomNumbers[6]-1]+'<img src=".\\images\\spring\\spring'+randomNumbers[6]+'.jpg">',
          document.getElementById("result8").innerHTML = springArray[randomNumbers[7]-1]+'<img src=".\\images\\spring\\spring'+randomNumbers[7]+'.jpg">';  
}

function summer() {
    return document.getElementById("result1").innerHTML = summerArray[randomNumbers[0]-1]+'<img src=".\\images\\summer\\summer'+randomNumbers[0]+'.jpg">', 
    document.getElementById("result2").innerHTML = summerArray[randomNumbers[1]-1]+'<img src=".\\images\\summer\\summer'+randomNumbers[1]+'.jpg">',
     document.getElementById("result3").innerHTML = summerArray[randomNumbers[2]-1]+'<img src=".\\images\\summer\\summer'+randomNumbers[2]+'.jpg">',
      document.getElementById("result4").innerHTML = summerArray[randomNumbers[3]-1]+'<img src=".\\images\\summer\\summer'+randomNumbers[3]+'.jpg">',
       document.getElementById("result5").innerHTML = summerArray[randomNumbers[4]-1]+'<img src=".\\images\\summer\\summer'+randomNumbers[4]+'.jpg">',
        document.getElementById("result6").innerHTML = summerArray[randomNumbers[5]-1]+'<img src=".\\images\\summer\\summer'+randomNumbers[5]+'.jpg">',
         document.getElementById("result7").innerHTML = summerArray[randomNumbers[6]-1]+'<img src=".\\images\\summer\\summer'+randomNumbers[6]+'.jpg">',
          document.getElementById("result8").innerHTML = summerArray[randomNumbers[7]-1]+'<img src=".\\images\\summer\\summer'+randomNumbers[7]+'.jpg">';  
}

function fall() {
    return document.getElementById("result1").innerHTML = fallArray[randomNumbers[0]-1]+'<img src=".\\images\\fall\\fall'+randomNumbers[0]+'.jpg">', 
    document.getElementById("result2").innerHTML = fallArray[randomNumbers[1]-1]+'<img src=".\\images\\fall\\fall'+randomNumbers[1]+'.jpg">',
     document.getElementById("result3").innerHTML = fallArray[randomNumbers[2]-1]+'<img src=".\\images\\fall\\fall'+randomNumbers[2]+'.jpg">',
      document.getElementById("result4").innerHTML = fallArray[randomNumbers[3]-1]+'<img src=".\\images\\fall\\fall'+randomNumbers[3]+'.jpg">',
       document.getElementById("result5").innerHTML = fallArray[randomNumbers[4]-1]+'<img src=".\\images\\fall\\fall'+randomNumbers[4]+'.jpg">',
        document.getElementById("result6").innerHTML = fallArray[randomNumbers[5]-1]+'<img src=".\\images\\fall\\fall'+randomNumbers[5]+'.jpg">',
         document.getElementById("result7").innerHTML = fallArray[randomNumbers[6]-1]+'<img src=".\\images\\fall\\fall'+randomNumbers[6]+'.jpg">',
          document.getElementById("result8").innerHTML = fallArray[randomNumbers[7]-1]+'<img src=".\\images\\fall\\fall'+randomNumbers[7]+'.jpg">';  
}