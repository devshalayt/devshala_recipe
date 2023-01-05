
const data = {
    "from": 1,
    "to": 20,
    "count": 10000,
    "_links": {
      "next": {
        "href": "https://api.edamam.com/api/recipes/v2?q=chicken&app_key=03f930176ad01973932af54bd06d9ed9&_cont=CHcVQBtNNQphDmgVQntAEX4BYldtBAUCRGRIAmUUZFx2AAIVX3dEA2EUMgQgAQsCF2NHUDdCZ1YhVldTQmJEUGpAZgd6UBFqX3cWQT1OcV9xBB8VADQWVhFCPwoxXVZEITQeVDcBaR4-SQ%3D%3D&type=public&app_id=754631f8",
        "title": "Next page"
      }
    },
    "hits": [
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6",
          "label": "Chicken Vesuvio",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=824bc7bdfcaf07c20722d10299664886fdb1c4706314abc580d5455a1460133b",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e42/e42f9119813e890af34c259785ae1cfb-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=edd7def1f290da7f56f10204770ca9c9e68bf882e90ba3fab30d4aee28138d2c",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e42/e42f9119813e890af34c259785ae1cfb-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d35e814196165bc3dc7be6ba3afa5ce931b4004ef474ed297521ff87ba08cecb",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=824bc7bdfcaf07c20722d10299664886fdb1c4706314abc580d5455a1460133b",
              "width": 300,
              "height": 300
            }
          },
          "source": "Serious Eats",
          "url": "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
          "shareAs": "http://www.edamam.com/recipe/chicken-vesuvio-b79327d05b8e5b838ad6cfd9576b30b6/chicken",
          "yield": 4,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Mediterranean",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1/2 cup olive oil",
            "5 cloves garlic, peeled",
            "2 large russet potatoes, peeled and cut into chunks",
            "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
            "3/4 cup white wine",
            "3/4 cup chicken stock",
            "3 tablespoons chopped parsley",
            "1 tablespoon dried oregano",
            "Salt and pepper",
            "1 cup frozen peas, thawed"
          ],
          "ingredients": [
            {
              "text": "1/2 cup olive oil",
              "quantity": 0.5,
              "measure": "cup",
              "food": "olive oil",
              "weight": 108,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "5 cloves garlic, peeled",
              "quantity": 5,
              "measure": "clove",
              "food": "garlic",
              "weight": 15,
              "foodCategory": "vegetables",
              "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
              "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
              "text": "2 large russet potatoes, peeled and cut into chunks",
              "quantity": 2,
              "measure": "<unit>",
              "food": "russet potatoes",
              "weight": 738,
              "foodCategory": "vegetables",
              "foodId": "food_brsjy86bq09pzgbmr4ri8bnohrf7",
              "image": "https://www.edamam.com/food-img/71b/71b3756ecfd3d1efa075874377038b67.jpg"
            },
            {
              "text": "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
              "quantity": 3.5,
              "measure": "pound",
              "food": "chicken",
              "weight": 1587.5732950000001,
              "foodCategory": "Poultry",
              "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
              "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            },
            {
              "text": "3/4 cup white wine",
              "quantity": 0.75,
              "measure": "cup",
              "food": "white wine",
              "weight": 176.39999999999998,
              "foodCategory": "wines",
              "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
              "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
            },
            {
              "text": "3/4 cup chicken stock",
              "quantity": 0.75,
              "measure": "cup",
              "food": "chicken stock",
              "weight": 180,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "3 tablespoons chopped parsley",
              "quantity": 3,
              "measure": "tablespoon",
              "food": "parsley",
              "weight": 11.399999999999999,
              "foodCategory": "vegetables",
              "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            },
            {
              "text": "1 tablespoon dried oregano",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "dried oregano",
              "weight": 2.9999999997971143,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
              "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
            },
            {
              "text": "Salt and pepper",
              "quantity": 0,
              "measure": null,
              "food": "Salt",
              "weight": 17.720239769998784,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Salt and pepper",
              "quantity": 0,
              "measure": null,
              "food": "pepper",
              "weight": 8.860119884999392,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "1 cup frozen peas, thawed",
              "quantity": 1,
              "measure": "cup",
              "food": "frozen peas",
              "weight": 134,
              "foodCategory": "vegetables",
              "foodId": "food_aqrct01b4nxw5eaxoo8woaxc3xd7",
              "image": "https://www.edamam.com/food-img/c91/c9130a361d5c5b279bf48c69e2466ec2.jpg"
            }
          ],
          "calories": 4228.043058200812,
          "totalWeight": 2976.8664549004047,
          "totalTime": 60,
          "cuisineType": [
            "italian"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 4228.043058200812,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 274.4489059026023,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 62.497618998656044,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.047163345382,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 147.39060633938868,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 47.35051984782951,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 175.96206666631727,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 156.13025633549864,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 19.83181033081862,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 16.239344767255698,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 230.72689680763318,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 815.06238045,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 6888.614561646296,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 400.0807431570531,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 478.1771035229573,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 5918.1808352043345,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 22.546435238210286,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 18.341531378501646,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2231.0712550999992,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 635.3716670147774,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 103.72979744959534,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.7264528338354403,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.9119200245119274,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 86.90416982948213,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 6.886357390963229,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 276.2712108159691,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 276.2712108159691,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 3.34660450586,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 2.1590996812000003,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 19.62869476856695,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 353.31486385948267,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1738.7966568296217,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 211.4021529100406,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 422.2290860040035,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 312.48809499328024,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 58.65402222210575,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 79.32724132327448,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 461.4537936152663,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 271.68746015,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 287.0256067352624,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 40.008074315705315,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 113.85169131498982,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 125.9187411745603,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 125.25797354561271,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 166.74119435001495,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 318.7244650142856,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 70.59685189053081,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 115.25533049955037,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 143.8710694862867,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 147.0707711163021,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 543.1510614342633,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 529.7197993048637,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 69.06780270399227,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 139.44185441083332,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 14.393997874666669,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 130.85796512377968,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 294.42905321623556,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 274.4489059026023,
              "hasRDI": true,
              "daily": 422.2290860040035,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 62.497618998656044,
                  "hasRDI": true,
                  "daily": 312.48809499328024,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.047163345382,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 147.39060633938868,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 47.35051984782951,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 175.96206666631727,
              "hasRDI": true,
              "daily": 58.65402222210575,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 156.13025633549864,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 19.83181033081862,
                  "hasRDI": true,
                  "daily": 79.32724132327448,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 16.239344767255698,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 230.72689680763318,
              "hasRDI": true,
              "daily": 461.4537936152663,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 815.06238045,
              "hasRDI": true,
              "daily": 271.68746015,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 6888.614561646296,
              "hasRDI": true,
              "daily": 287.0256067352624,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 400.0807431570531,
              "hasRDI": true,
              "daily": 40.008074315705315,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 478.1771035229573,
              "hasRDI": true,
              "daily": 113.85169131498982,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 5918.1808352043345,
              "hasRDI": true,
              "daily": 125.9187411745603,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 22.546435238210286,
              "hasRDI": true,
              "daily": 125.25797354561271,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 18.341531378501646,
              "hasRDI": true,
              "daily": 166.74119435001495,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2231.0712550999992,
              "hasRDI": true,
              "daily": 318.7244650142856,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 635.3716670147774,
              "hasRDI": true,
              "daily": 70.59685189053081,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 103.72979744959534,
              "hasRDI": true,
              "daily": 115.25533049955037,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.7264528338354403,
              "hasRDI": true,
              "daily": 143.8710694862867,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.9119200245119274,
              "hasRDI": true,
              "daily": 147.0707711163021,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 86.90416982948213,
              "hasRDI": true,
              "daily": 543.1510614342633,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 6.886357390963229,
              "hasRDI": true,
              "daily": 529.7197993048637,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 276.2712108159691,
              "hasRDI": true,
              "daily": 69.06780270399227,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 276.2712108159691,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 3.34660450586,
              "hasRDI": true,
              "daily": 139.44185441083332,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 2.1590996812000003,
              "hasRDI": true,
              "daily": 14.393997874666669,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 19.62869476856695,
              "hasRDI": true,
              "daily": 130.85796512377968,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 353.31486385948267,
              "hasRDI": true,
              "daily": 294.42905321623556,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1738.7966568296217,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/b79327d05b8e5b838ad6cfd9576b30b6?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8275bb28647abcedef0baaf2dcf34f8b",
          "label": "Chicken Paprikash",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=056a666916b1878e82c5242c8d1af40b64778b8a57de8da8c7142db8890ebe37",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=37f2d9cdaab2659c01699ad06de4af3ced55e624d36c517d82fe5cc27039e78d",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1a24ee149f04dada28584814a150526f3e7e90d9629293b96b17c97bb4cb13d5",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=056a666916b1878e82c5242c8d1af40b64778b8a57de8da8c7142db8890ebe37",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=351fd5dab0b5020f8e4663512add20c59160be8ea1f0f0300414a7fc18e0302a",
              "width": 600,
              "height": 600
            }
          },
          "source": "No Recipes",
          "url": "http://norecipes.com/recipe/chicken-paprikash/",
          "shareAs": "http://www.edamam.com/recipe/chicken-paprikash-8275bb28647abcedef0baaf2dcf34f8b/chicken",
          "yield": 4,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
            "1/2 teaspoon salt",
            "1/4 teaspoon black pepper",
            "1 tablespoon butter – cultured unsalted (or olive oil)",
            "240 grams onion sliced thin (1 large onion)",
            "70 grams Anaheim pepper chopped (1 large pepper)",
            "25 grams paprika (about 1/4 cup)",
            "1 cup chicken stock",
            "1/2 teaspoon salt",
            "1/2 cup sour cream",
            "1 tablespoon flour – all-purpose"
          ],
          "ingredients": [
            {
              "text": "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
              "quantity": 640,
              "measure": "gram",
              "food": "chicken - drumsticks",
              "weight": 640,
              "foodCategory": "Poultry",
              "foodId": "food_agzvc6lbxg03stab195szars32lx",
              "image": "https://www.edamam.com/food-img/491/4916353c22bd1ac381ac81d55597ddbe.jpg"
            },
            {
              "text": "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
              "quantity": 640,
              "measure": "gram",
              "food": "thighs",
              "weight": 640,
              "foodCategory": "Poultry",
              "foodId": "food_bsarl08be0gwarb34bpviafna9d4",
              "image": "https://www.edamam.com/food-img/007/00792642367e1f55de680762f85cfb3b.jpg"
            },
            {
              "text": "1/2 teaspoon salt",
              "quantity": 0.5,
              "measure": "teaspoon",
              "food": "salt",
              "weight": 3,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "1/4 teaspoon black pepper",
              "quantity": 0.25,
              "measure": "teaspoon",
              "food": "black pepper",
              "weight": 0.725,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "1 tablespoon butter – cultured unsalted (or olive oil)",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "olive oil",
              "weight": 13.5,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "240 grams onion sliced thin (1 large onion)",
              "quantity": 1,
              "measure": "onion",
              "food": "onion",
              "weight": 78.125,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "70 grams Anaheim pepper chopped (1 large pepper)",
              "quantity": 1,
              "measure": "pepper",
              "food": "Anaheim pepper",
              "weight": 56.25,
              "foodCategory": "vegetables",
              "foodId": "food_bv2gevdbd1orbiarnp1vfaez1r85",
              "image": "https://www.edamam.com/food-img/73f/73ff2eeb21372fe15b0ec51f9ecf368d.jpeg"
            },
            {
              "text": "25 grams paprika (about 1/4 cup)",
              "quantity": 0.25,
              "measure": "cup",
              "food": "paprika",
              "weight": 27.200000000459866,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
              "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
            },
            {
              "text": "1 cup chicken stock",
              "quantity": 1,
              "measure": "cup",
              "food": "chicken stock",
              "weight": 240,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "1/2 teaspoon salt",
              "quantity": 0.5,
              "measure": "teaspoon",
              "food": "salt",
              "weight": 3,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "1/2 cup sour cream",
              "quantity": 0.5,
              "measure": "cup",
              "food": "sour cream",
              "weight": 115,
              "foodCategory": "Dairy",
              "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
              "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
            },
            {
              "text": "1 tablespoon flour – all-purpose",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "flour",
              "weight": 7.8124999998679145,
              "foodCategory": "grains",
              "foodId": "food_ahebfs0a985an4aubqaebbipra58",
              "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
            }
          ],
          "calories": 3033.2012500008163,
          "totalWeight": 1824.6125000003276,
          "totalTime": 0,
          "cuisineType": [
            "central europe"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 3033.2012500008163,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 208.05040250005803,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 61.207636375009635,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.8448,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 85.78187337500766,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 39.88905187503517,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 47.816761250147486,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 35.75772374999056,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 12.059037500156926,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 16.123463750047193,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 236.58131375005138,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1283,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 3945.65975000031,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 326.0403750010333,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 324.8095000007895,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 4014.232125010343,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 16.44184625009567,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 22.48163750001899,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2388.5722500013017,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 1144.9192500113265,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 143.94730000000413,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.310280500001359,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.988508750005604,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 67.97661300004462,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 5.478774250009787,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 101.71375000019098,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 101.71375000019098,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 7.682,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.7400000000000002,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 13.406427500133741,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 71.52511250036889,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1319.0028025000358,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 151.6600625000408,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 320.0775423077816,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 306.03818187504817,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 15.938920416715828,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 48.2361500006277,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 473.16262750010276,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 427.6666666666667,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 164.40248958334624,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 32.60403750010333,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 77.33559523828322,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 85.40919414915624,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 91.34359027830926,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 204.3785227274454,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 341.2246071430431,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 127.2132500012585,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 159.94144444444905,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 109.19004166677993,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 229.88528846196954,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 424.8538312502789,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 421.4441730776759,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 25.428437500047743,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 320.08333333333337,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 11.600000000000001,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 89.37618333422493,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 59.60426041697407,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 208.05040250005803,
              "hasRDI": true,
              "daily": 320.0775423077816,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 61.207636375009635,
                  "hasRDI": true,
                  "daily": 306.03818187504817,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.8448,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 85.78187337500766,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 39.88905187503517,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 47.816761250147486,
              "hasRDI": true,
              "daily": 15.938920416715828,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 35.75772374999056,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 12.059037500156926,
                  "hasRDI": true,
                  "daily": 48.2361500006277,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 16.123463750047193,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 236.58131375005138,
              "hasRDI": true,
              "daily": 473.16262750010276,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1283,
              "hasRDI": true,
              "daily": 427.6666666666667,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 3945.65975000031,
              "hasRDI": true,
              "daily": 164.40248958334624,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 326.0403750010333,
              "hasRDI": true,
              "daily": 32.60403750010333,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 324.8095000007895,
              "hasRDI": true,
              "daily": 77.33559523828322,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 4014.232125010343,
              "hasRDI": true,
              "daily": 85.40919414915624,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 16.44184625009567,
              "hasRDI": true,
              "daily": 91.34359027830926,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 22.48163750001899,
              "hasRDI": true,
              "daily": 204.3785227274454,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2388.5722500013017,
              "hasRDI": true,
              "daily": 341.2246071430431,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 1144.9192500113265,
              "hasRDI": true,
              "daily": 127.2132500012585,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 143.94730000000413,
              "hasRDI": true,
              "daily": 159.94144444444905,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.310280500001359,
              "hasRDI": true,
              "daily": 109.19004166677993,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.988508750005604,
              "hasRDI": true,
              "daily": 229.88528846196954,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 67.97661300004462,
              "hasRDI": true,
              "daily": 424.8538312502789,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 5.478774250009787,
              "hasRDI": true,
              "daily": 421.4441730776759,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 101.71375000019098,
              "hasRDI": true,
              "daily": 25.428437500047743,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 101.71375000019098,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 7.682,
              "hasRDI": true,
              "daily": 320.08333333333337,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.7400000000000002,
              "hasRDI": true,
              "daily": 11.600000000000001,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 13.406427500133741,
              "hasRDI": true,
              "daily": 89.37618333422493,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 71.52511250036889,
              "hasRDI": true,
              "daily": 59.60426041697407,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1319.0028025000358,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/8275bb28647abcedef0baaf2dcf34f8b?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_be3ba087e212f13672b553ecfa876333",
          "label": "Baked Chicken",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d8774fed4f3b02f6391b74d8f644a67ba77cbd5ce6ac43c214deb1cf9fd0f899",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=44fce75e229316d286fd48d74b44a91f6d27b7582f7e64fcb2ce9b15c1c85052",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a42d8e9bb4475d59d49af51b5f4ccddb41ad31463dfcfd9504834d473779cbef",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d8774fed4f3b02f6391b74d8f644a67ba77cbd5ce6ac43c214deb1cf9fd0f899",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=585a3c3bed6d78edb42d8e302a74c3917061a80792fe54c66fa5395fb7923936",
              "width": 600,
              "height": 600
            }
          },
          "source": "Martha Stewart",
          "url": "http://www.marthastewart.com/318981/baked-chicken",
          "shareAs": "http://www.edamam.com/recipe/baked-chicken-be3ba087e212f13672b553ecfa876333/chicken",
          "yield": 4,
          "dietLabels": [
            "High-Protein",
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Paleo",
            "Mediterranean",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Sulfite-Free",
            "FODMAP-Free",
            "Kosher"
          ],
          "cautions": [],
          "ingredientLines": [
            "6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on",
            "1/2 teaspoon coarse salt",
            "1/2 teaspoon Mrs. Dash seasoning",
            "1/4 teaspoon freshly ground black pepper"
          ],
          "ingredients": [
            {
              "text": "6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on",
              "quantity": 6,
              "measure": "half",
              "food": "chicken breast",
              "weight": 522,
              "foodCategory": "Poultry",
              "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
              "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
            },
            {
              "text": "1/2 teaspoon coarse salt",
              "quantity": 0.5,
              "measure": "teaspoon",
              "food": "coarse salt",
              "weight": 2.4270833334564377,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "1/2 teaspoon Mrs. Dash seasoning",
              "quantity": 0.5,
              "measure": "teaspoon",
              "food": "seasoning",
              "weight": 0.75,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
              "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
            },
            {
              "text": "1/4 teaspoon freshly ground black pepper",
              "quantity": 0.25,
              "measure": "teaspoon",
              "food": "black pepper",
              "weight": 0.575,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            }
          ],
          "calories": 630.14575,
          "totalWeight": 525.7520833334565,
          "totalTime": 0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 630.14575,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 13.751619999999999,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 2.9715389999999995,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.036539999999999996,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 3.6098742499999994,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 2.2335385,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 0.8596375,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0.6294125,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 0.230225,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 0.01718,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 117.58166749999998,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 381.06,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1175.9064583810464,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 36.69975000002954,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 148.84752083333456,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1756.4459166666766,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 2.259991875000406,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 3.5824195833334564,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1114.051,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 37.68525,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.09,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.49328099999999997,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.9264074999999998,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 50.14084724999999,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 4.244993249999999,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 48.11274999999999,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 48.11274999999999,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1.0961999999999998,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 2.93908,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 8.025775,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 385.9043241666669,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 31.507287500000004,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 21.156338461538457,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 14.857694999999998,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 0.28654583333333333,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 0.9209,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 235.16333499999996,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 127.02,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 48.9961024325436,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 3.669975000002954,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 35.439885912698706,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 37.371189716312266,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 12.555510416668923,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 32.56745075757687,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 159.15014285714284,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 4.187250000000001,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.1,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 41.10675,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 71.26211538461537,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 313.3802953125,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 326.5379423076923,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 12.028187499999996,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 45.675,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 19.593866666666667,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 6.6881458333333335,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 13.751619999999999,
              "hasRDI": true,
              "daily": 21.156338461538457,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 2.9715389999999995,
                  "hasRDI": true,
                  "daily": 14.857694999999998,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.036539999999999996,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 3.6098742499999994,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 2.2335385,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 0.8596375,
              "hasRDI": true,
              "daily": 0.28654583333333333,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0.6294125,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 0.230225,
                  "hasRDI": true,
                  "daily": 0.9209,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 0.01718,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 117.58166749999998,
              "hasRDI": true,
              "daily": 235.16333499999996,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 381.06,
              "hasRDI": true,
              "daily": 127.02,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1175.9064583810464,
              "hasRDI": true,
              "daily": 48.9961024325436,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 36.69975000002954,
              "hasRDI": true,
              "daily": 3.669975000002954,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 148.84752083333456,
              "hasRDI": true,
              "daily": 35.439885912698706,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1756.4459166666766,
              "hasRDI": true,
              "daily": 37.371189716312266,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 2.259991875000406,
              "hasRDI": true,
              "daily": 12.555510416668923,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 3.5824195833334564,
              "hasRDI": true,
              "daily": 32.56745075757687,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1114.051,
              "hasRDI": true,
              "daily": 159.15014285714284,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 37.68525,
              "hasRDI": true,
              "daily": 4.187250000000001,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0.09,
              "hasRDI": true,
              "daily": 0.1,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.49328099999999997,
              "hasRDI": true,
              "daily": 41.10675,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.9264074999999998,
              "hasRDI": true,
              "daily": 71.26211538461537,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 50.14084724999999,
              "hasRDI": true,
              "daily": 313.3802953125,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 4.244993249999999,
              "hasRDI": true,
              "daily": 326.5379423076923,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 48.11274999999999,
              "hasRDI": true,
              "daily": 12.028187499999996,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 48.11274999999999,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 1.0961999999999998,
              "hasRDI": true,
              "daily": 45.675,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": true,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 2.93908,
              "hasRDI": true,
              "daily": 19.593866666666667,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 8.025775,
              "hasRDI": true,
              "daily": 6.6881458333333335,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 385.9043241666669,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/be3ba087e212f13672b553ecfa876333?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_2463f2482609d7a471dbbf3b268bd956",
          "label": "Catalan Chicken",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c75a8afe4426774f776de3e37444d707179167b7e26ea12ce5670c48b438c411",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4d9/4d9084cbc170789caa9e997108b595de-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=14903f0f898158a81b434499baccca8b8a34eb566605dad548bdbe29ab63ec4b",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4d9/4d9084cbc170789caa9e997108b595de-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=713b94f4e42426d373fdec5406c6ec754ccfb2f9f7c8215353fefb1fee48ecae",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6277e95baee1896e57d606e73a0e4639610a3ac4675803d20ad41f0560072e82",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4d9/4d9084cbc170789caa9e997108b595de-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=84bb20bea96f6546bc63d5eda256d114eea45f69ea725932a52ca95ba9b9c3e6",
              "width": 600,
              "height": 600
            }
          },
          "source": "Bon Appetit",
          "url": "http://www.bonappetit.com/columns/breadwinner/article/how-to-get-your-kids-to-eat-sauce-let-them-cook-it-themselves",
          "shareAs": "http://www.edamam.com/recipe/catalan-chicken-2463f2482609d7a471dbbf3b268bd956/chicken",
          "yield": 14,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Paleo",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "No oil added",
            "Sulfite-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1 whole 4-pound chicken, quartered",
            "8 slices bacon",
            "30 cloves garlic",
            "3 lemons, peeled, rinds thinly sliced and reserved",
            "½ cup Banyuls or another fortified dessert wine",
            "1 cup veal or chicken stock"
          ],
          "ingredients": [
            {
              "text": "1 whole 4-pound chicken, quartered",
              "quantity": 1,
              "measure": "<unit>",
              "food": "chicken",
              "weight": 1200,
              "foodCategory": "Poultry",
              "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
              "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            },
            {
              "text": "8 slices bacon",
              "quantity": 8,
              "measure": "slice",
              "food": "bacon",
              "weight": 232,
              "foodCategory": "cured meats",
              "foodId": "food_av0awb0bgs18qub01sd9kbx44b61",
              "image": "https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg"
            },
            {
              "text": "30 cloves garlic",
              "quantity": 30,
              "measure": "clove",
              "food": "garlic",
              "weight": 90,
              "foodCategory": "vegetables",
              "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
              "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
              "text": "3 lemons, peeled, rinds thinly sliced and reserved",
              "quantity": 3,
              "measure": "<unit>",
              "food": "lemons",
              "weight": 174,
              "foodCategory": "fruit",
              "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
              "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
            },
            {
              "text": "½ cup Banyuls or another fortified dessert wine",
              "quantity": 0.5,
              "measure": "cup",
              "food": "dessert wine",
              "weight": 51.5,
              "foodCategory": "wines",
              "foodId": "food_a9b1edjayi2e3kae6qvpvb0l2zaf",
              "image": "https://www.edamam.com/food-img/ea0/ea026d474cb3f9c0b3302eeaa5232151.jpg"
            },
            {
              "text": "1 cup veal or chicken stock",
              "quantity": 1,
              "measure": "cup",
              "food": "chicken stock",
              "weight": 240,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            }
          ],
          "calories": 3900.8,
          "totalWeight": 1987.5,
          "totalTime": 0,
          "cuisineType": [
            "french"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "condiments and sauces"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 3900.8,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 276.65279999999996,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 83.48508,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.47256,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 116.76431999999998,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 54.623439999999995,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 64.46275,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 57.70074999999999,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 6.7620000000000005,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 15.368699999999997,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 266.2674,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1060.32,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2742.4550000000004,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 363.06,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 318.495,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 3627.76,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 14.9528,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 19.978049999999996,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2333.0550000000003,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 521.66,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 139.98,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.7031899999999998,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.9749899999999998,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 95.658335,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 6.214219999999999,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 105.84,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 105.84,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 4.88,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.3280000000000003,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 5.0026,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 20.01,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1359.53665,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 195.04,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 425.6196923076922,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 417.42539999999997,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 21.487583333333333,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 27.048000000000002,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 532.5348,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 353.44,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 114.26895833333336,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 36.306,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 75.83214285714286,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 77.1863829787234,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 83.07111111111111,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 181.61863636363634,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 333.29357142857145,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 57.96222222222222,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 155.5333333333333,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 141.9325,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 151.92230769230767,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 597.8645937499999,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 478.016923076923,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 26.46,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 203.33333333333334,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 22.186666666666667,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 33.35066666666667,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 16.675,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 276.65279999999996,
              "hasRDI": true,
              "daily": 425.6196923076922,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 83.48508,
                  "hasRDI": true,
                  "daily": 417.42539999999997,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.47256,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 116.76431999999998,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 54.623439999999995,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 64.46275,
              "hasRDI": true,
              "daily": 21.487583333333333,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 57.70074999999999,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 6.7620000000000005,
                  "hasRDI": true,
                  "daily": 27.048000000000002,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 15.368699999999997,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 266.2674,
              "hasRDI": true,
              "daily": 532.5348,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1060.32,
              "hasRDI": true,
              "daily": 353.44,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2742.4550000000004,
              "hasRDI": true,
              "daily": 114.26895833333336,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 363.06,
              "hasRDI": true,
              "daily": 36.306,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 318.495,
              "hasRDI": true,
              "daily": 75.83214285714286,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 3627.76,
              "hasRDI": true,
              "daily": 77.1863829787234,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 14.9528,
              "hasRDI": true,
              "daily": 83.07111111111111,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 19.978049999999996,
              "hasRDI": true,
              "daily": 181.61863636363634,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2333.0550000000003,
              "hasRDI": true,
              "daily": 333.29357142857145,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 521.66,
              "hasRDI": true,
              "daily": 57.96222222222222,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 139.98,
              "hasRDI": true,
              "daily": 155.5333333333333,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.7031899999999998,
              "hasRDI": true,
              "daily": 141.9325,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.9749899999999998,
              "hasRDI": true,
              "daily": 151.92230769230767,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 95.658335,
              "hasRDI": true,
              "daily": 597.8645937499999,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 6.214219999999999,
              "hasRDI": true,
              "daily": 478.016923076923,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 105.84,
              "hasRDI": true,
              "daily": 26.46,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 105.84,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 4.88,
              "hasRDI": true,
              "daily": 203.33333333333334,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 3.3280000000000003,
              "hasRDI": true,
              "daily": 22.186666666666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 5.0026,
              "hasRDI": true,
              "daily": 33.35066666666667,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 20.01,
              "hasRDI": true,
              "daily": 16.675,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1359.53665,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/2463f2482609d7a471dbbf3b268bd956?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_a7c379c59775dd0c7c88710f7fecff81",
          "label": "Chicken Stew",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/74b/74bfb16655500083c4af92bcf45889f7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=865e11dce8ad922f21c1561a0938f88f4e88a846d680d9a19cd34697fdaeda0b",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/74b/74bfb16655500083c4af92bcf45889f7-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=30bd3d12f024d81f348263fa6dce0da98f30a66664402cdb8361b566542bf77b",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/74b/74bfb16655500083c4af92bcf45889f7-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=731f78bdd78b173f6506e4df7a2ec87df26e90d806f0f2e52ed02c6d3095b6c8",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/74b/74bfb16655500083c4af92bcf45889f7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=865e11dce8ad922f21c1561a0938f88f4e88a846d680d9a19cd34697fdaeda0b",
              "width": 300,
              "height": 300
            }
          },
          "source": "Food52",
          "url": "https://food52.com/recipes/83097-chicken-stew",
          "shareAs": "http://www.edamam.com/recipe/chicken-stew-a7c379c59775dd0c7c88710f7fecff81/chicken",
          "yield": 4,
          "dietLabels": [],
          "healthLabels": [
            "Paleo",
            "Mediterranean",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1 pound chicken cut in pieces",
            "4 carrots",
            "1 onion",
            "1 leek",
            "1 green pepper",
            "kosher salt",
            "Freshly ground black pepper",
            "Extra Virgin Olive Oil",
            "1 cup white wine",
            "Chicken broth"
          ],
          "ingredients": [
            {
              "text": "1 pound chicken cut in pieces",
              "quantity": 1,
              "measure": "pound",
              "food": "chicken",
              "weight": 453.59237,
              "foodCategory": "Poultry",
              "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
              "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            },
            {
              "text": "4 carrots",
              "quantity": 4,
              "measure": "<unit>",
              "food": "carrots",
              "weight": 244,
              "foodCategory": "vegetables",
              "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
              "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
            },
            {
              "text": "1 onion",
              "quantity": 1,
              "measure": "<unit>",
              "food": "onion",
              "weight": 125,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "1 leek",
              "quantity": 1,
              "measure": "<unit>",
              "food": "leek",
              "weight": 89,
              "foodCategory": "vegetables",
              "foodId": "food_a27jevnb06c1m9ax7k41xbbcwcuo",
              "image": "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg"
            },
            {
              "text": "1 green pepper",
              "quantity": 1,
              "measure": "<unit>",
              "food": "green pepper",
              "weight": 116.28888888888889,
              "foodCategory": "vegetables",
              "foodId": "food_bz8rcwobbzm7zhb3wh2n7aznivou",
              "image": "https://www.edamam.com/food-img/629/629dc9fddc1f8aec27fa337dd6ce2b7c.jpg"
            },
            {
              "text": "kosher salt",
              "quantity": 0,
              "measure": null,
              "food": "kosher salt",
              "weight": 7.578487553333335,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Freshly ground black pepper",
              "quantity": 0,
              "measure": null,
              "food": "black pepper",
              "weight": 3.7892437766666673,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "Extra Virgin Olive Oil",
              "quantity": 0,
              "measure": null,
              "food": "Extra Virgin Olive Oil",
              "weight": 17.17790512088889,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "1 cup white wine",
              "quantity": 1,
              "measure": "cup",
              "food": "white wine",
              "weight": 235.2,
              "foodCategory": "wines",
              "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
              "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
            },
            {
              "text": "Chicken broth",
              "quantity": 0,
              "measure": null,
              "food": "Chicken broth",
              "weight": 252.61625177777785,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            }
          ],
          "calories": 1647.980907065869,
          "totalWeight": 1543.5979816137524,
          "totalTime": 70,
          "cuisineType": [
            "french"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1647.980907065869,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 89.81913152245268,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 23.031228283225754,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.4399845989000001,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 42.398837451219094,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 17.56112288716005,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 70.49527952737833,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 57.000689740770554,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 13.49458978660778,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 29.401041271592888,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 97.27173723764012,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 347.7727650533334,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 3573.482932523408,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 270.6726634159516,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 209.22095303859533,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2667.6196938292937,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 8.993759483110317,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 7.68606367803631,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 959.3679548249112,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 2321.724130037477,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 135.58497709022222,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.7146481600676889,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.035666185698,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 38.60529223489397,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.8248730190856555,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 181.54141511981112,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 181.54141511981112,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1.4061363470000001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.9071847400000002,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 6.825468394547111,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 107.93738677651179,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1246.7609451726719,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 82.39904535329345,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 138.18327926531182,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 115.15614141612878,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 23.498426509126112,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 53.978359146431124,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 194.54347447528025,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 115.92425501777781,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 148.89512218847534,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 27.06726634159516,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 49.81451262823698,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 56.75786582615519,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 49.96533046172399,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 69.87330616396645,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 137.05256497498732,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 257.9693477819419,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 150.64997454469136,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 59.55401333897409,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 79.66662966907693,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 241.28307646808733,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 217.29792454505042,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 45.38535377995279,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 58.58901445833334,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 6.047898266666667,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 45.50312263031408,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 89.94782231375983,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 89.81913152245268,
              "hasRDI": true,
              "daily": 138.18327926531182,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 23.031228283225754,
                  "hasRDI": true,
                  "daily": 115.15614141612878,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.4399845989000001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 42.398837451219094,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 17.56112288716005,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 70.49527952737833,
              "hasRDI": true,
              "daily": 23.498426509126112,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 57.000689740770554,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 13.49458978660778,
                  "hasRDI": true,
                  "daily": 53.978359146431124,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 29.401041271592888,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 97.27173723764012,
              "hasRDI": true,
              "daily": 194.54347447528025,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 347.7727650533334,
              "hasRDI": true,
              "daily": 115.92425501777781,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 3573.482932523408,
              "hasRDI": true,
              "daily": 148.89512218847534,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 270.6726634159516,
              "hasRDI": true,
              "daily": 27.06726634159516,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 209.22095303859533,
              "hasRDI": true,
              "daily": 49.81451262823698,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2667.6196938292937,
              "hasRDI": true,
              "daily": 56.75786582615519,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 8.993759483110317,
              "hasRDI": true,
              "daily": 49.96533046172399,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 7.68606367803631,
              "hasRDI": true,
              "daily": 69.87330616396645,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 959.3679548249112,
              "hasRDI": true,
              "daily": 137.05256497498732,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 2321.724130037477,
              "hasRDI": true,
              "daily": 257.9693477819419,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 135.58497709022222,
              "hasRDI": true,
              "daily": 150.64997454469136,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.7146481600676889,
              "hasRDI": true,
              "daily": 59.55401333897409,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.035666185698,
              "hasRDI": true,
              "daily": 79.66662966907693,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 38.60529223489397,
              "hasRDI": true,
              "daily": 241.28307646808733,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.8248730190856555,
              "hasRDI": true,
              "daily": 217.29792454505042,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 181.54141511981112,
              "hasRDI": true,
              "daily": 45.38535377995279,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 181.54141511981112,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 1.4061363470000001,
              "hasRDI": true,
              "daily": 58.58901445833334,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.9071847400000002,
              "hasRDI": true,
              "daily": 6.047898266666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 6.825468394547111,
              "hasRDI": true,
              "daily": 45.50312263031408,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 107.93738677651179,
              "hasRDI": true,
              "daily": 89.94782231375983,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1246.7609451726719,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/a7c379c59775dd0c7c88710f7fecff81?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_9ca0499f2ac7f1e4cae63bdf4671c1b3",
          "label": "Chicken Liver Pâté",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/480/480000e79dbdd4648c4acd65630ff654.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a635d84c482f1cfb98f6767730c94ea2889527ce96d5fd0dc9b3ff45995c2886",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/480/480000e79dbdd4648c4acd65630ff654-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=017536faa385e920208f45f71feb787742093d3006ac81797d407b963210ba35",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/480/480000e79dbdd4648c4acd65630ff654-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b983ab5e2b054a128ae217968b5a04ed2cfe507124fb6e00a6951b00063a6214",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/480/480000e79dbdd4648c4acd65630ff654.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a635d84c482f1cfb98f6767730c94ea2889527ce96d5fd0dc9b3ff45995c2886",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/480/480000e79dbdd4648c4acd65630ff654-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=997b68a8e013ca190011a4fcd15803467e251060fab6ca08a9f31e854b7c3926",
              "width": 600,
              "height": 600
            }
          },
          "source": "Saveur",
          "url": "http://www.saveur.com/article/Recipes/Classic-Chicken-Pate",
          "shareAs": "http://www.edamam.com/recipe/chicken-liver-p%C3%A2t%C3%A9-9ca0499f2ac7f1e4cae63bdf4671c1b3/chicken",
          "yield": 6,
          "dietLabels": [],
          "healthLabels": [
            "Sugar-Conscious",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Sulfite-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "8 oz. chicken livers, cleaned",
            "4 cups chicken stock",
            "2 tbsp. rendered chicken fat or unsalted butter",
            "½ medium yellow onion, minced",
            "1½ tbsp. cognac or brandy",
            "2 hard-boiled eggs",
            "Kosher salt and freshly ground black pepper, to taste",
            "Toast points, for serving"
          ],
          "ingredients": [
            {
              "text": "8 oz. chicken livers, cleaned",
              "quantity": 8,
              "measure": "ounce",
              "food": "chicken livers",
              "weight": 226.796185,
              "foodCategory": "Poultry",
              "foodId": "food_a9xs7abb632dn3aozv3w4a9351fh",
              "image": "https://www.edamam.com/food-img/9aa/9aa4760ac12b682555a37a1cdc91150b.jpg"
            },
            {
              "text": "4 cups chicken stock",
              "quantity": 4,
              "measure": "cup",
              "food": "chicken stock",
              "weight": 960,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "2 tbsp. rendered chicken fat or unsalted butter",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "rendered chicken fat",
              "weight": 28.2499999995224,
              "foodCategory": "cured meats",
              "foodId": "food_bhh30ayacqyq77bxdepyhb53souu",
              "image": null
            },
            {
              "text": "½ medium yellow onion, minced",
              "quantity": 0.5,
              "measure": "<unit>",
              "food": "yellow onion",
              "weight": 55,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "1½ tbsp. cognac or brandy",
              "quantity": 1.5,
              "measure": "tablespoon",
              "food": "cognac",
              "weight": 20.9999999995266,
              "foodCategory": "liquors and cocktails",
              "foodId": "food_ajguqpia53yz3oah6w2frad3tz65",
              "image": "https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg"
            },
            {
              "text": "2 hard-boiled eggs",
              "quantity": 2,
              "measure": "<unit>",
              "food": "hard-boiled eggs",
              "weight": 80,
              "foodCategory": "Eggs",
              "foodId": "food_a2y52zfbr22uq1ah5thnqac607ft",
              "image": "https://www.edamam.com/food-img/e54/e54c012fabed0f9cf211a817d1e23c5c.jpg"
            },
            {
              "text": "Kosher salt and freshly ground black pepper, to taste",
              "quantity": 0,
              "measure": null,
              "food": "Kosher salt",
              "weight": 8.370277109994293,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Kosher salt and freshly ground black pepper, to taste",
              "quantity": 0,
              "measure": null,
              "food": "black pepper",
              "weight": 4.185138554997146,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "Toast points, for serving",
              "quantity": 1,
              "measure": "serving",
              "food": "Toast",
              "weight": 24,
              "foodCategory": "bread, rolls and tortillas",
              "foodId": "food_apk1psxaqtsilfbfxoa5hbxfgdg4",
              "image": "https://www.edamam.com/food-img/6c0/6c0c1e866e0106b960d1463a9bdc54db.jpg"
            }
          ],
          "calories": 1149.3071579176606,
          "totalWeight": 1403.013109609151,
          "totalTime": 0,
          "cuisineType": [
            "french"
          ],
          "mealType": [
            "brunch"
          ],
          "dishType": [
            "starter"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1149.3071579176606,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 60.28724125191769,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 18.59619900008277,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.14741752025000002,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 23.669510024373537,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 9.578013358828558,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 57.63780825642067,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 54.51596820200639,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 3.121840054414278,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 19.963584886751985,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 76.79992539786387,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1137.0493382495367,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 3253.884458298463,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 158.9239872518578,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 116.34567993959617,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1824.8317597802393,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 24.918058879171262,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 8.764693074359098,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1141.4496883668335,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 7608.239745009798,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 46.63451711500001,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.2180983138893495,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 5.377976918698905,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 39.13951151048009,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.733492711245013,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 1451.9230413543498,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 1443.5230413543497,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 4.8,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 38.51623247299957,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.7600000000000002,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 2.8116987359719703,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 10.599071814530328,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1187.1557198867463,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 57.465357895883024,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 92.74960192602722,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 92.98099500041386,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 19.21260275214022,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 12.487360217657113,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 153.59985079572775,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 379.0164460831789,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 135.5785190957693,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 15.89239872518578,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 27.701352366570518,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 38.82620765489871,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 138.43366043984034,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 79.67902794871907,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 163.06424119526193,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 845.3599716677553,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 51.81613012777779,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 101.50819282411247,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 413.6905322076081,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 244.62194694050058,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 210.26867009577026,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 362.9807603385874,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1604.8430197083153,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 11.733333333333336,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 18.744658239813134,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 8.83255984544194,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 60.28724125191769,
              "hasRDI": true,
              "daily": 92.74960192602722,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 18.59619900008277,
                  "hasRDI": true,
                  "daily": 92.98099500041386,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.14741752025000002,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 23.669510024373537,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 9.578013358828558,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 57.63780825642067,
              "hasRDI": true,
              "daily": 19.21260275214022,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 54.51596820200639,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 3.121840054414278,
                  "hasRDI": true,
                  "daily": 12.487360217657113,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 19.963584886751985,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 76.79992539786387,
              "hasRDI": true,
              "daily": 153.59985079572775,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1137.0493382495367,
              "hasRDI": true,
              "daily": 379.0164460831789,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 3253.884458298463,
              "hasRDI": true,
              "daily": 135.5785190957693,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 158.9239872518578,
              "hasRDI": true,
              "daily": 15.89239872518578,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 116.34567993959617,
              "hasRDI": true,
              "daily": 27.701352366570518,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1824.8317597802393,
              "hasRDI": true,
              "daily": 38.82620765489871,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 24.918058879171262,
              "hasRDI": true,
              "daily": 138.43366043984034,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 8.764693074359098,
              "hasRDI": true,
              "daily": 79.67902794871907,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1141.4496883668335,
              "hasRDI": true,
              "daily": 163.06424119526193,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 7608.239745009798,
              "hasRDI": true,
              "daily": 845.3599716677553,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 46.63451711500001,
              "hasRDI": true,
              "daily": 51.81613012777779,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.2180983138893495,
              "hasRDI": true,
              "daily": 101.50819282411247,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 5.377976918698905,
              "hasRDI": true,
              "daily": 413.6905322076081,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 39.13951151048009,
              "hasRDI": true,
              "daily": 244.62194694050058,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.733492711245013,
              "hasRDI": true,
              "daily": 210.26867009577026,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 1451.9230413543498,
              "hasRDI": true,
              "daily": 362.9807603385874,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 1443.5230413543497,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 4.8,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 38.51623247299957,
              "hasRDI": true,
              "daily": 1604.8430197083153,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.7600000000000002,
              "hasRDI": true,
              "daily": 11.733333333333336,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 2.8116987359719703,
              "hasRDI": true,
              "daily": 18.744658239813134,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 10.599071814530328,
              "hasRDI": true,
              "daily": 8.83255984544194,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1187.1557198867463,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/9ca0499f2ac7f1e4cae63bdf4671c1b3?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4caf01683bf99ddc7c08c35774aae54c",
          "label": "Persian Chicken",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/8f8/8f810dfe198fa3e520d291f3fcf62bbf.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=399b17ba32c6c18cbb04f8d3b6db017a745b04cf60b74afaeb77c7e46e5c5574",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8f8/8f810dfe198fa3e520d291f3fcf62bbf-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=35c12421354f2af86a4dd7d5d48636f687ae8ff53a0ec8ded6cee71d0934c203",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8f8/8f810dfe198fa3e520d291f3fcf62bbf-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=707d9aeedf71be5d15da8cb6771afe5e423e0af8ea68a38e97a0c718b4d17413",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8f8/8f810dfe198fa3e520d291f3fcf62bbf.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=399b17ba32c6c18cbb04f8d3b6db017a745b04cf60b74afaeb77c7e46e5c5574",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8f8/8f810dfe198fa3e520d291f3fcf62bbf-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4015ef93151682032a1a93ffead70bceca98d18fbb127e56196c7d4bdd17ddc8",
              "width": 600,
              "height": 600
            }
          },
          "source": "BBC Good Food",
          "url": "http://www.bbcgoodfood.com/recipes/7343/",
          "shareAs": "http://www.edamam.com/recipe/persian-chicken-4caf01683bf99ddc7c08c35774aae54c/chicken",
          "yield": 5,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Gluten-Free",
            "Wheat-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "2 large onions",
            "750 g chicken",
            "500 g mushrooms",
            "1 cup water",
            "1 cup red wine",
            "2 teaspoons chicken stock",
            "200 ml mayonnaise",
            "200 ml cream",
            "small bunch of parsley",
            "1 teaspoon curry powder"
          ],
          "ingredients": [
            {
              "text": "2 large onions",
              "quantity": 2,
              "measure": "<unit>",
              "food": "onions",
              "weight": 300,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "750 g chicken",
              "quantity": 750,
              "measure": "gram",
              "food": "chicken",
              "weight": 750,
              "foodCategory": "Poultry",
              "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
              "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            },
            {
              "text": "500 g mushrooms",
              "quantity": 500,
              "measure": "gram",
              "food": "mushrooms",
              "weight": 500,
              "foodCategory": "vegetables",
              "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
              "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
            },
            {
              "text": "1 cup water",
              "quantity": 1,
              "measure": "cup",
              "food": "water",
              "weight": 237,
              "foodCategory": "water",
              "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
              "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
              "text": "1 cup red wine",
              "quantity": 1,
              "measure": "cup",
              "food": "red wine",
              "weight": 235.2,
              "foodCategory": "wines",
              "foodId": "food_b5q0xv2ba8la5hbzdfzdgaca3fwu",
              "image": "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG"
            },
            {
              "text": "2 teaspoons chicken stock",
              "quantity": 2,
              "measure": "teaspoon",
              "food": "chicken stock",
              "weight": 10.00000000050721,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "200 ml mayonnaise",
              "quantity": 200,
              "measure": "milliliter",
              "food": "mayonnaise",
              "weight": 195.2759811031433,
              "foodCategory": "condiments and sauces",
              "foodId": "food_bu8t61zaplle7dbrzk81dbygq0qj",
              "image": "https://www.edamam.com/food-img/577/577308a0422357885c94cc9b5f1f1862.jpg"
            },
            {
              "text": "200 ml cream",
              "quantity": 200,
              "measure": "milliliter",
              "food": "cream",
              "weight": 201.53157530298427,
              "foodCategory": "Dairy",
              "foodId": "food_bvhbvd7bwy6a7wamfrmvmbmen1sz",
              "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
            },
            {
              "text": "small bunch of parsley",
              "quantity": 1,
              "measure": "bunch",
              "food": "parsley",
              "weight": 45,
              "foodCategory": "vegetables",
              "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            },
            {
              "text": "1 teaspoon curry powder",
              "quantity": 1,
              "measure": "teaspoon",
              "food": "curry powder",
              "weight": 2,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_ao4koeoajh7yjxaq2knzrbv55y8o",
              "image": "https://www.edamam.com/food-img/9ce/9ce02a2887385fd2adaec8dd8adcf9c5.jpg"
            }
          ],
          "calories": 4115.31372402923,
          "totalWeight": 2476.0075564066346,
          "totalTime": 0,
          "cuisineType": [
            "middle eastern"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 4115.31372402923,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 340.63488831153063,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 101.69895025064645,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.7275,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 106.42951848978652,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 118.2007671143163,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 60.39955095097116,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 47.75055095097116,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 12.649,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 30.29667095096127,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 164.42033729372395,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 915.0558907953296,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1824.7524095809965,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 396.32152394695504,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 297.70121027122923,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 4178.55268147777,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 14.21537947259196,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 14.341002623197575,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1834.685576687987,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 1325.3647744952705,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 105.79318945181893,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.094816946566834,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 3.3421967328337137,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 70.81039531437621,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 3.7401622095790854,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 267.4332630121447,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 267.4332630121447,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 2.887756835545372,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.91072102712089,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 5.341534698211785,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 759.8558104096965,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1829.8568521078191,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 205.7656862014615,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 524.0536743254318,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 508.49475125323227,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 20.13318365032372,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 50.596,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 328.8406745874479,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 305.0186302651099,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 76.0313503992082,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 39.6321523946955,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 70.88124054076886,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 88.90537620165469,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 78.97433040328866,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 130.37275111997795,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 262.09793952685527,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 147.2627527216967,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 117.5479882797988,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 91.23474554723617,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 257.0920563718241,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 442.5649707148513,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 287.70478535223737,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 66.85831575303618,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 120.32320148105717,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 26.071473514139267,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 35.610231321411895,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 633.2131753414137,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 340.63488831153063,
              "hasRDI": true,
              "daily": 524.0536743254318,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 101.69895025064645,
                  "hasRDI": true,
                  "daily": 508.49475125323227,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.7275,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 106.42951848978652,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 118.2007671143163,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 60.39955095097116,
              "hasRDI": true,
              "daily": 20.13318365032372,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 47.75055095097116,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 12.649,
                  "hasRDI": true,
                  "daily": 50.596,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 30.29667095096127,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 164.42033729372395,
              "hasRDI": true,
              "daily": 328.8406745874479,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 915.0558907953296,
              "hasRDI": true,
              "daily": 305.0186302651099,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1824.7524095809965,
              "hasRDI": true,
              "daily": 76.0313503992082,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 396.32152394695504,
              "hasRDI": true,
              "daily": 39.6321523946955,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 297.70121027122923,
              "hasRDI": true,
              "daily": 70.88124054076886,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 4178.55268147777,
              "hasRDI": true,
              "daily": 88.90537620165469,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 14.21537947259196,
              "hasRDI": true,
              "daily": 78.97433040328866,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 14.341002623197575,
              "hasRDI": true,
              "daily": 130.37275111997795,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1834.685576687987,
              "hasRDI": true,
              "daily": 262.09793952685527,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 1325.3647744952705,
              "hasRDI": true,
              "daily": 147.2627527216967,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 105.79318945181893,
              "hasRDI": true,
              "daily": 117.5479882797988,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.094816946566834,
              "hasRDI": true,
              "daily": 91.23474554723617,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 3.3421967328337137,
              "hasRDI": true,
              "daily": 257.0920563718241,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 70.81039531437621,
              "hasRDI": true,
              "daily": 442.5649707148513,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 3.7401622095790854,
              "hasRDI": true,
              "daily": 287.70478535223737,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 267.4332630121447,
              "hasRDI": true,
              "daily": 66.85831575303618,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 267.4332630121447,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 2.887756835545372,
              "hasRDI": true,
              "daily": 120.32320148105717,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 3.91072102712089,
              "hasRDI": true,
              "daily": 26.071473514139267,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 5.341534698211785,
              "hasRDI": true,
              "daily": 35.610231321411895,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 759.8558104096965,
              "hasRDI": true,
              "daily": 633.2131753414137,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1829.8568521078191,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/4caf01683bf99ddc7c08c35774aae54c?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1817e7fccea9ae39d09c0e2c7fb86cb2",
          "label": "Kreplach (Chicken Dumplings)",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4dd/4dd1c7a0d8b00e8929bd6babf0968ba2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5fd7efce9f42f5942ad25945bd7891037adcd6c043b726162378148ed3d8e814",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4dd/4dd1c7a0d8b00e8929bd6babf0968ba2-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6d03408889cc843a8d81d6d5c0c06145c641006873a0b8f6bc0f68b5bc5e2de6",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4dd/4dd1c7a0d8b00e8929bd6babf0968ba2-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3a14ff03b91bd5fd3ef38c26f9ed4ea47bd3b2c159656dc5feb1c286b84da95c",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4dd/4dd1c7a0d8b00e8929bd6babf0968ba2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5fd7efce9f42f5942ad25945bd7891037adcd6c043b726162378148ed3d8e814",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4dd/4dd1c7a0d8b00e8929bd6babf0968ba2-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3563e5f91fdb12b573510f10d0bcc56d8c00dcab28d08b6632f1a7df1965f487",
              "width": 600,
              "height": 600
            }
          },
          "source": "Tasting Table",
          "url": "https://www.tastingtable.com/entry_detail/chefs_recipes/10154/Matzo_balls_watch_your_back.htm",
          "shareAs": "http://www.edamam.com/recipe/kreplach-chicken-dumplings-1817e7fccea9ae39d09c0e2c7fb86cb2/chicken",
          "yield": 8,
          "dietLabels": [],
          "healthLabels": [
            "Mediterranean",
            "Dairy-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1½ teaspoons canola oil",
            "½ small shallot, finely chopped",
            "1 cup (about ½ pound) raw, boneless chicken meat (preferably from 3 boneless chicken thighs), roughly chopped",
            "⅔ cup (about ¼ pound) chicken skin and fat (reserved from the 3 chicken thighs)",
            "2 chicken livers (optional)",
            "2 garlic cloves, finely chopped",
            "¼ cup finely chopped chives, plus extra for serving",
            "1¼ teaspoons kosher salt",
            "¾ teaspoon freshly ground black pepper",
            "30 to 34 square wonton wrappers",
            "8 cups store-bought or homemade chicken broth"
          ],
          "ingredients": [
            {
              "text": "1½ teaspoons canola oil",
              "quantity": 1.5,
              "measure": "teaspoon",
              "food": "canola oil",
              "weight": 6.75,
              "foodCategory": "Oils",
              "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
              "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
            },
            {
              "text": "½ small shallot, finely chopped",
              "quantity": 0.5,
              "measure": "<unit>",
              "food": "shallot",
              "weight": 20,
              "foodCategory": "vegetables",
              "foodId": "food_bu2ver7a5f52dfap8q9f0bn085qb",
              "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
            },
            {
              "text": "1 cup (about ½ pound) raw, boneless chicken meat (preferably from 3 boneless chicken thighs), roughly chopped",
              "quantity": 0.5,
              "measure": "pound",
              "food": "chicken meat",
              "weight": 226.796185,
              "foodCategory": "Poultry",
              "foodId": "food_bm8j53kbu73enhamxkr92a7x5nq6",
              "image": "https://www.edamam.com/food-img/e54/e546d27ffc3d338f99031ce1423cd331.jpg"
            },
            {
              "text": "⅔ cup (about ¼ pound) chicken skin and fat (reserved from the 3 chicken thighs)",
              "quantity": 0.25,
              "measure": "pound",
              "food": "chicken thighs",
              "weight": 113.3980925,
              "foodCategory": "Poultry",
              "foodId": "food_bsarl08be0gwarb34bpviafna9d4",
              "image": "https://www.edamam.com/food-img/007/00792642367e1f55de680762f85cfb3b.jpg"
            },
            {
              "text": "2 chicken livers (optional)",
              "quantity": 2,
              "measure": "<unit>",
              "food": "chicken livers",
              "weight": 88,
              "foodCategory": "Poultry",
              "foodId": "food_a9xs7abb632dn3aozv3w4a9351fh",
              "image": "https://www.edamam.com/food-img/9aa/9aa4760ac12b682555a37a1cdc91150b.jpg"
            },
            {
              "text": "2 garlic cloves, finely chopped",
              "quantity": 2,
              "measure": "clove",
              "food": "garlic",
              "weight": 6,
              "foodCategory": "vegetables",
              "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
              "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
              "text": "¼ cup finely chopped chives, plus extra for serving",
              "quantity": 0.25,
              "measure": "cup",
              "food": "chives",
              "weight": 12.000000000202874,
              "foodCategory": "vegetables",
              "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
              "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
            },
            {
              "text": "1¼ teaspoons kosher salt",
              "quantity": 1.25,
              "measure": "teaspoon",
              "food": "kosher salt",
              "weight": 6.067708333641094,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "¾ teaspoon freshly ground black pepper",
              "quantity": 0.75,
              "measure": "teaspoon",
              "food": "black pepper",
              "weight": 1.7249999999999999,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "30 to 34 square wonton wrappers",
              "quantity": 32,
              "measure": "<unit>",
              "food": "square wonton wrappers",
              "weight": 1024,
              "foodCategory": "quick breads and pastries",
              "foodId": "food_aciwn4ebx5qeeobklsjebb6s408x",
              "image": "https://www.edamam.com/food-img/64e/64e52edbb86d08069012c6a331738ace.jpg"
            },
            {
              "text": "8 cups store-bought or homemade chicken broth",
              "quantity": 8,
              "measure": "cup",
              "food": "chicken broth",
              "weight": 1920,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            }
          ],
          "calories": 4387.196994575062,
          "totalWeight": 3418.669277500203,
          "totalTime": 10,
          "cuisineType": [
            "chinese"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 4387.196994575062,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 75.41498066225148,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 17.7009890662003,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.18025087862500003,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 28.480051034500192,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 19.089343754475543,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 668.5666327312588,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 648.6322077312537,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 19.934425000005074,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 32.20304000000375,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 232.32389635250667,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 723.24746015,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 8935.970517375006,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 618.0151586751867,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 389.12045290008524,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 3958.0806223506006,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 49.840690575503245,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 17.500824142251137,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2210.457905275118,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 3049.634700875442,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 35.25231225511787,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 6.538524822575158,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 7.581342816825234,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 118.62495621027632,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 3.7624347264752798,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 2024.7509257252132,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 826.6709257252131,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 706.5600000000001,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 16.337414057999997,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.3401942775000001,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 3.140897982750426,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 43.72626627293151,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 2408.560648285934,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 219.3598497287531,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 116.02304717269459,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 88.5049453310015,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 222.85554424375292,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 79.7377000000203,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 464.64779270501333,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 241.0824867166667,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 372.33210489062526,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 61.801515867518674,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 92.64772688097267,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 84.21448132660852,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 276.8927254194625,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 159.09840129319215,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 315.77970075358826,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 338.8483000972713,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 39.169235839019855,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 544.8770685479299,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 583.1802166788642,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 741.405976314227,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 289.4180558827138,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 506.18773143130323,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 680.7255857499999,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 2.2679618500000003,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 20.93931988500284,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 36.438555227442926,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 75.41498066225148,
              "hasRDI": true,
              "daily": 116.02304717269459,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 17.7009890662003,
                  "hasRDI": true,
                  "daily": 88.5049453310015,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.18025087862500003,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 28.480051034500192,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 19.089343754475543,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 668.5666327312588,
              "hasRDI": true,
              "daily": 222.85554424375292,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 648.6322077312537,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 19.934425000005074,
                  "hasRDI": true,
                  "daily": 79.7377000000203,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 32.20304000000375,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 232.32389635250667,
              "hasRDI": true,
              "daily": 464.64779270501333,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 723.24746015,
              "hasRDI": true,
              "daily": 241.0824867166667,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 8935.970517375006,
              "hasRDI": true,
              "daily": 372.33210489062526,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 618.0151586751867,
              "hasRDI": true,
              "daily": 61.801515867518674,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 389.12045290008524,
              "hasRDI": true,
              "daily": 92.64772688097267,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 3958.0806223506006,
              "hasRDI": true,
              "daily": 84.21448132660852,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 49.840690575503245,
              "hasRDI": true,
              "daily": 276.8927254194625,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 17.500824142251137,
              "hasRDI": true,
              "daily": 159.09840129319215,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2210.457905275118,
              "hasRDI": true,
              "daily": 315.77970075358826,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 3049.634700875442,
              "hasRDI": true,
              "daily": 338.8483000972713,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 35.25231225511787,
              "hasRDI": true,
              "daily": 39.169235839019855,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 6.538524822575158,
              "hasRDI": true,
              "daily": 544.8770685479299,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 7.581342816825234,
              "hasRDI": true,
              "daily": 583.1802166788642,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 118.62495621027632,
              "hasRDI": true,
              "daily": 741.405976314227,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 3.7624347264752798,
              "hasRDI": true,
              "daily": 289.4180558827138,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 2024.7509257252132,
              "hasRDI": true,
              "daily": 506.18773143130323,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 826.6709257252131,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 706.5600000000001,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 16.337414057999997,
              "hasRDI": true,
              "daily": 680.7255857499999,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.3401942775000001,
              "hasRDI": true,
              "daily": 2.2679618500000003,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 3.140897982750426,
              "hasRDI": true,
              "daily": 20.93931988500284,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 43.72626627293151,
              "hasRDI": true,
              "daily": 36.438555227442926,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 2408.560648285934,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/1817e7fccea9ae39d09c0e2c7fb86cb2?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_a6ee2e431ba83557209f48e1cf194f2f",
          "label": "Chicken cacciatore",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/2ca/2ca946a40338e9b93c1d14dec518e1b8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8e801aef87826877df4cfa12cb4c0088fab4bae0244859e3c5693f1d136add03",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2ca/2ca946a40338e9b93c1d14dec518e1b8-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=521cae0caece990d94cc02c6f97c0b8704aca2d3979427e6acc63bd2a6f22c3d",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2ca/2ca946a40338e9b93c1d14dec518e1b8-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4d2eec6ac1793926f8488561d7835b67366e3c22e56a10fda1b0d248ccf10154",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2ca/2ca946a40338e9b93c1d14dec518e1b8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8e801aef87826877df4cfa12cb4c0088fab4bae0244859e3c5693f1d136add03",
              "width": 300,
              "height": 300
            }
          },
          "source": "BBC",
          "url": "http://www.bbc.co.uk/food/recipes/chickenalocacciatore_70349",
          "shareAs": "http://www.edamam.com/recipe/chicken-cacciatore-a6ee2e431ba83557209f48e1cf194f2f/chicken",
          "yield": 6,
          "dietLabels": [],
          "healthLabels": [
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "8 tbsp olive oil",
            "1 onion, sliced",
            "2 celery stalks, roughly chopped",
            "2 medium carrots, roughly chopped",
            "6 chicken breasts, or chicken thighs, bones removed",
            "175ml/6fl oz white wine",
            "3 tbsp tomato purée",
            "500ml/17 fl oz chicken stock",
            "2 bay leaves",
            "2-3 sage leaves",
            "1 rosemary sprig",
            "250g/9oz easy-cook polenta",
            "Knob of butter",
            "25g/1oz parmesan"
          ],
          "ingredients": [
            {
              "text": "8 tbsp olive oil",
              "quantity": 8,
              "measure": "tablespoon",
              "food": "olive oil",
              "weight": 108,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "1 onion, sliced",
              "quantity": 1,
              "measure": "<unit>",
              "food": "onion",
              "weight": 125,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "2 celery stalks, roughly chopped",
              "quantity": 2,
              "measure": "stalk",
              "food": "celery",
              "weight": 80,
              "foodCategory": "vegetables",
              "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
              "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
            },
            {
              "text": "2 medium carrots, roughly chopped",
              "quantity": 2,
              "measure": "<unit>",
              "food": "carrots",
              "weight": 122,
              "foodCategory": "vegetables",
              "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
              "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
            },
            {
              "text": "6 chicken breasts, or chicken thighs, bones removed",
              "quantity": 6,
              "measure": "<unit>",
              "food": "chicken breasts",
              "weight": 1632,
              "foodCategory": "Poultry",
              "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
              "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
            },
            {
              "text": "175ml/6fl oz white wine",
              "quantity": 175,
              "measure": "milliliter",
              "food": "white wine",
              "weight": 173.97314680098222,
              "foodCategory": "wines",
              "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
              "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
            },
            {
              "text": "3 tbsp tomato purée",
              "quantity": 3,
              "measure": "tablespoon",
              "food": "tomato purée",
              "weight": 45.3749999992329,
              "foodCategory": "canned vegetables",
              "foodId": "food_aqqtb83adjyq8ybf51yo8bsjetdh",
              "image": null
            },
            {
              "text": "500ml/17 fl oz chicken stock",
              "quantity": 500,
              "measure": "milliliter",
              "food": "chicken stock",
              "weight": 507.21034052764503,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "2 bay leaves",
              "quantity": 2,
              "measure": "<unit>",
              "food": "bay leaves",
              "weight": 1.2,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_asx39x4ayja4jab6ivj6zayvkblo",
              "image": "https://www.edamam.com/food-img/0f9/0f9f5f95df173e9ffaaff2977bef88f3.jpg"
            },
            {
              "text": "2-3 sage leaves",
              "quantity": 2.5,
              "measure": "leaf",
              "food": "sage",
              "weight": 2.5,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b00mwy0bne9gs4au15ja8ab10h0e",
              "image": "https://www.edamam.com/food-img/509/50984580e9aad4b4ddd5b7ed45a64bf4.jpg"
            },
            {
              "text": "1 rosemary sprig",
              "quantity": 1,
              "measure": "<unit>",
              "food": "rosemary sprig",
              "weight": 5,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6tm2t2blxi7okaeiv91wb8bmygq",
              "image": "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg"
            },
            {
              "text": "250g/9oz easy-cook polenta",
              "quantity": 250,
              "measure": "gram",
              "food": "polenta",
              "weight": 250,
              "foodCategory": "grains",
              "foodId": "food_b05sp8gagykqhgb4uo2jhbsbfftc",
              "image": null
            },
            {
              "text": "Knob of butter",
              "quantity": 1,
              "measure": "knob",
              "food": "butter",
              "weight": 28.4,
              "foodCategory": "Dairy",
              "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
              "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
              "text": "25g/1oz parmesan",
              "quantity": 25,
              "measure": "gram",
              "food": "parmesan",
              "weight": 25,
              "foodCategory": "Cheese",
              "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
              "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
            }
          ],
          "calories": 4610.522702966512,
          "totalWeight": 3105.6584873278603,
          "totalTime": 60,
          "cuisineType": [
            "italian"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 4610.522702966512,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 192.1055840863296,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 45.464357193093434,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.045192,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 102.02090943187056,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 22.836333775323016,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 254.37419433739547,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 234.91296933741006,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 19.461224999985426,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 28.12015558959247,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 411.3857017840447,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1284.6363102158293,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2074.6219442931547,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 607.4653934276569,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 647.9187283010507,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 7473.214541780477,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 14.068624211460735,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 15.319734752897812,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 4191.838958366396,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 1452.4923534051923,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 26.574920680984718,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 2.2910815265241498,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 3.758277761468247,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 169.84118329249358,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 14.661059381121206,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 347.67099849429235,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 347.67099849429235,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 3.77548,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.5509999999999999,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 27.603630602148705,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 157.71468826821857,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 2204.5718441068716,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 230.5261351483256,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 295.5470524405071,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 227.3217859654672,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 84.79139811246515,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 77.8448999999417,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 822.7714035680895,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 428.2121034052764,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 86.44258101221479,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 60.746539342765686,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 154.26636388120255,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 159.00456471873355,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 78.15902339700409,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 139.27031593543464,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 598.8341369094851,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 161.38803926724358,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 29.527689645538576,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 190.92346054367917,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 289.0982893437113,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 1061.507395578085,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1127.773798547785,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 86.91774962357309,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 157.31166666666667,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.673333333333333,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 184.0242040143247,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 131.42890689018213,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 192.1055840863296,
              "hasRDI": true,
              "daily": 295.5470524405071,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 45.464357193093434,
                  "hasRDI": true,
                  "daily": 227.3217859654672,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.045192,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 102.02090943187056,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 22.836333775323016,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 254.37419433739547,
              "hasRDI": true,
              "daily": 84.79139811246515,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 234.91296933741006,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 19.461224999985426,
                  "hasRDI": true,
                  "daily": 77.8448999999417,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 28.12015558959247,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 411.3857017840447,
              "hasRDI": true,
              "daily": 822.7714035680895,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1284.6363102158293,
              "hasRDI": true,
              "daily": 428.2121034052764,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2074.6219442931547,
              "hasRDI": true,
              "daily": 86.44258101221479,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 607.4653934276569,
              "hasRDI": true,
              "daily": 60.746539342765686,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 647.9187283010507,
              "hasRDI": true,
              "daily": 154.26636388120255,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 7473.214541780477,
              "hasRDI": true,
              "daily": 159.00456471873355,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 14.068624211460735,
              "hasRDI": true,
              "daily": 78.15902339700409,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 15.319734752897812,
              "hasRDI": true,
              "daily": 139.27031593543464,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 4191.838958366396,
              "hasRDI": true,
              "daily": 598.8341369094851,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 1452.4923534051923,
              "hasRDI": true,
              "daily": 161.38803926724358,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 26.574920680984718,
              "hasRDI": true,
              "daily": 29.527689645538576,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 2.2910815265241498,
              "hasRDI": true,
              "daily": 190.92346054367917,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 3.758277761468247,
              "hasRDI": true,
              "daily": 289.0982893437113,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 169.84118329249358,
              "hasRDI": true,
              "daily": 1061.507395578085,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 14.661059381121206,
              "hasRDI": true,
              "daily": 1127.773798547785,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 347.67099849429235,
              "hasRDI": true,
              "daily": 86.91774962357309,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 347.67099849429235,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 3.77548,
              "hasRDI": true,
              "daily": 157.31166666666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.5509999999999999,
              "hasRDI": true,
              "daily": 3.673333333333333,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 27.603630602148705,
              "hasRDI": true,
              "daily": 184.0242040143247,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 157.71468826821857,
              "hasRDI": true,
              "daily": 131.42890689018213,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 2204.5718441068716,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/a6ee2e431ba83557209f48e1cf194f2f?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_690c3797b4f56fc1e119c14096d651c5",
          "label": "Roast Chicken",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/25f/25feccd2eed4722604be4a9ffa1ac768.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=122999934f7a0c8a1c2459e11e246f88960825c9f4de22d42a68f339aee47f9d",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/25f/25feccd2eed4722604be4a9ffa1ac768-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d13be66e604df74153509a9965dede70ec390a3e0b166cac99d694c67b763a4e",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/25f/25feccd2eed4722604be4a9ffa1ac768-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1dcd42867f6ff4098f64717f09e933c4180d8d3e54dd95cc9ceb12327bd5883d",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/25f/25feccd2eed4722604be4a9ffa1ac768.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=122999934f7a0c8a1c2459e11e246f88960825c9f4de22d42a68f339aee47f9d",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/25f/25feccd2eed4722604be4a9ffa1ac768-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=69a3659b3b6184b02410ea4a96b97ca43f69b5108fb4c7092f1d30940c55ee97",
              "width": 600,
              "height": 600
            }
          },
          "source": "San Francisco Gate",
          "url": "http://www.sfgate.com/food/recipes/detail.html?rid=18229&sorig=qs",
          "shareAs": "http://www.edamam.com/recipe/roast-chicken-690c3797b4f56fc1e119c14096d651c5/chicken",
          "yield": 10,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Kidney-Friendly",
            "Keto-Friendly",
            "Paleo",
            "Mediterranean",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "Kosher",
            "Immuno-Supportive"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1 whole chicken, about 3-4 pounds",
            "-- Salt and fresh-ground pepper, to taste",
            "3 to 4 sprigs thyme, or other herbs",
            "-- Olive oil, to taste",
            "-- Chicken stock (optional)"
          ],
          "ingredients": [
            {
              "text": "1 whole chicken, about 3-4 pounds",
              "quantity": 3.5,
              "measure": "pound",
              "food": "chicken",
              "weight": 1587.5732950000001,
              "foodCategory": "Poultry",
              "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
              "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            },
            {
              "text": "-- Salt and fresh-ground pepper, to taste",
              "quantity": 0,
              "measure": null,
              "food": "Salt",
              "weight": 9.58843977,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "3 to 4 sprigs thyme, or other herbs",
              "quantity": 3.5,
              "measure": "sprig",
              "food": "thyme",
              "weight": 10.5,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
              "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
            },
            {
              "text": "-- Olive oil, to taste",
              "quantity": 0,
              "measure": null,
              "food": "Olive oil",
              "weight": 21.733796812,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "-- Chicken stock (optional)",
              "quantity": 0,
              "measure": null,
              "food": "Chicken stock",
              "weight": 319.6146590000001,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            }
          ],
          "calories": 2638.8251983480804,
          "totalWeight": 1947.9257318387613,
          "totalTime": 0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2638.8251983480804,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 188.32577871436,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 50.60459884905096,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.047163345382,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 85.08976786082334,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 37.89314651357677,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 13.849647462700002,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 12.379647462700001,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 1.47,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 5.0499116122000025,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 209.4343597584,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 819.2508202199999,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 4510.086493078291,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 173.12221565054267,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 245.5795942902676,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2440.787247134261,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 12.369161748835513,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 14.788117415486761,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1684.3642236120002,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 470.801581236,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 34.722526767599994,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.7646350350100001,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.61658726887,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 78.674400857766,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 4.00992938409,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 85.478723386,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 85.478723386,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 3.34660450586,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 2.1590996812000003,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 6.453333762022,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 29.916222607824004,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1013.7734060424935,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 131.94125991740404,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 289.7319672528616,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 253.0229942452548,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 4.616549154233334,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 5.88,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 418.86871951680007,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 273.08360673999994,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 187.9202705449288,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 17.31222156505427,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 58.471331973873234,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 51.93164355604811,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 68.7175652713084,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 134.43743104987965,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 240.623460516,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 52.311286804,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 38.58058529733333,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 63.71958625083334,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 124.35286683615384,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 491.7150053610375,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 308.45610646846154,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 21.3696808465,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 139.44185441083332,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 14.393997874666669,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 43.02222508014667,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 24.93018550652,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 188.32577871436,
              "hasRDI": true,
              "daily": 289.7319672528616,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 50.60459884905096,
                  "hasRDI": true,
                  "daily": 253.0229942452548,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.047163345382,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 85.08976786082334,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 37.89314651357677,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 13.849647462700002,
              "hasRDI": true,
              "daily": 4.616549154233334,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 12.379647462700001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 1.47,
                  "hasRDI": true,
                  "daily": 5.88,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 5.0499116122000025,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 209.4343597584,
              "hasRDI": true,
              "daily": 418.86871951680007,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 819.2508202199999,
              "hasRDI": true,
              "daily": 273.08360673999994,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 4510.086493078291,
              "hasRDI": true,
              "daily": 187.9202705449288,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 173.12221565054267,
              "hasRDI": true,
              "daily": 17.31222156505427,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 245.5795942902676,
              "hasRDI": true,
              "daily": 58.471331973873234,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2440.787247134261,
              "hasRDI": true,
              "daily": 51.93164355604811,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 12.369161748835513,
              "hasRDI": true,
              "daily": 68.7175652713084,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 14.788117415486761,
              "hasRDI": true,
              "daily": 134.43743104987965,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1684.3642236120002,
              "hasRDI": true,
              "daily": 240.623460516,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 470.801581236,
              "hasRDI": true,
              "daily": 52.311286804,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 34.722526767599994,
              "hasRDI": true,
              "daily": 38.58058529733333,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.7646350350100001,
              "hasRDI": true,
              "daily": 63.71958625083334,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.61658726887,
              "hasRDI": true,
              "daily": 124.35286683615384,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 78.674400857766,
              "hasRDI": true,
              "daily": 491.7150053610375,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 4.00992938409,
              "hasRDI": true,
              "daily": 308.45610646846154,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 85.478723386,
              "hasRDI": true,
              "daily": 21.3696808465,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 85.478723386,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 3.34660450586,
              "hasRDI": true,
              "daily": 139.44185441083332,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 2.1590996812000003,
              "hasRDI": true,
              "daily": 14.393997874666669,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 6.453333762022,
              "hasRDI": true,
              "daily": 43.02222508014667,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 29.916222607824004,
              "hasRDI": true,
              "daily": 24.93018550652,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1013.7734060424935,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/690c3797b4f56fc1e119c14096d651c5?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_6379680892262fe72b7daf2cfcb24965",
          "label": "Southwestern Chicken Soup",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/216/216f2d87bd0921a4059ca89aeecad473.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=de807c5978e9f56fd07be891d282fe61582efd6836bb9f7f02021e863705cfb5",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/216/216f2d87bd0921a4059ca89aeecad473-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=63da6f74c5438030ace5431ad4ccbc7433aec54070893dc9e64b5e149b9e61a5",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/216/216f2d87bd0921a4059ca89aeecad473-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=821557e858179ca43fa9bcaa69ce629f01808acc54f00e01f1924c48df7ba946",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/216/216f2d87bd0921a4059ca89aeecad473.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=de807c5978e9f56fd07be891d282fe61582efd6836bb9f7f02021e863705cfb5",
              "width": 300,
              "height": 300
            }
          },
          "source": "Real Simple",
          "url": "https://www.realsimple.com/food-recipes/browse-all-recipes/southwestern-chicken-soup",
          "shareAs": "http://www.edamam.com/recipe/southwestern-chicken-soup-6379680892262fe72b7daf2cfcb24965/chicken",
          "yield": 4,
          "dietLabels": [],
          "healthLabels": [
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1 12-ounce jar salsa verde",
            "3 cups cooked chicken pieces (1 small deli-counter rotisserie chicken or leftovers)",
            "1 15-ounce can cannellini beans, drained",
            "3 cups chicken broth",
            "1 teaspoon ground cumin (optional)",
            "2 green onions, chopped",
            "1/2 cup sour cream",
            "tortilla chips (optional)"
          ],
          "ingredients": [
            {
              "text": "1 12-ounce jar salsa verde",
              "quantity": 12,
              "measure": "ounce",
              "food": "salsa verde",
              "weight": 340.1942775,
              "foodCategory": "condiments and sauces",
              "foodId": "food_ax6tfr7a1hlbwpbkyaytlbkxaub2",
              "image": "https://www.edamam.com/food-img/205/205d9e349c3b7e60d4886c5ab4e27a92.jpg"
            },
            {
              "text": "3 cups cooked chicken pieces (1 small deli-counter rotisserie chicken or leftovers)",
              "quantity": 3,
              "measure": "cup",
              "food": "chicken",
              "weight": 420,
              "foodCategory": "Poultry",
              "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
              "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            },
            {
              "text": "1 15-ounce can cannellini beans, drained",
              "quantity": 15,
              "measure": "ounce",
              "food": "cannellini beans",
              "weight": 425.242846875,
              "foodCategory": "plant-based protein",
              "foodId": "food_bggwvu5a6s0gniamjy6r1aoknilo",
              "image": "https://www.edamam.com/food-img/a39/a39102018ed39c6008134e0570af8a6c.jpg"
            },
            {
              "text": "3 cups chicken broth",
              "quantity": 3,
              "measure": "cup",
              "food": "chicken broth",
              "weight": 720,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "1 teaspoon ground cumin (optional)",
              "quantity": 1,
              "measure": "teaspoon",
              "food": "cumin",
              "weight": 2.1,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
              "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
            },
            {
              "text": "2 green onions, chopped",
              "quantity": 2,
              "measure": "<unit>",
              "food": "green onions",
              "weight": 27.777777777777782,
              "foodCategory": "vegetables",
              "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
              "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
            },
            {
              "text": "1/2 cup sour cream",
              "quantity": 0.5,
              "measure": "cup",
              "food": "sour cream",
              "weight": 115,
              "foodCategory": "Dairy",
              "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
              "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
            },
            {
              "text": "tortilla chips (optional)",
              "quantity": 0,
              "measure": null,
              "food": "tortilla chips",
              "weight": 0,
              "foodCategory": "savory snacks",
              "foodId": "food_bkxl9s9bpcxmenbef89qbbofifnr",
              "image": "https://www.edamam.com/food-img/24e/24eea039cad825c1745263674e9879df.jpg"
            }
          ],
          "calories": 2014.964559776389,
          "totalWeight": 2050.314902152778,
          "totalTime": 15,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "soup"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2014.964559776389,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 99.36288110346527,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 34.01055845251389,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.40740000000000004,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 36.63950314018751,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 16.690820542618056,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 143.4837684753889,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 115.66569833066669,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 27.81807014472222,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 28.522476190659724,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 134.24366935220834,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 396.40000000000003,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 3448.0502517881946,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 574.89576319375,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 419.05232018680556,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 4637.870370204167,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 22.218195036423612,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 12.769338912083333,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1491.257422209028,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 434.45425941388896,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 56.422818354722224,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.1385882784277779,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.6226990154659722,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 46.31100433192709,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.6021228299256944,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 390.86117044652775,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 390.86117044652775,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1.624,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.3000000000000003,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 7.0269616613402786,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 126.02186429937501,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1654.0261906551525,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 100.74822798881945,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 152.8659709284081,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 170.05279226256945,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 47.82792282512963,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 111.27228057888888,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 268.4873387044167,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 132.13333333333333,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 143.6687604911748,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 57.489576319375,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 99.77436194923942,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 98.67809298306737,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 123.43441686902007,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 116.08489920075758,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 213.0367746012897,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 48.272695490432106,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 62.6920203941358,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 94.88235653564816,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 124.82300118969017,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 289.4437770745443,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 200.16329460966878,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 97.71529261163194,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 67.66666666666667,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 8.666666666666668,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 46.84641107560186,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 105.01822024947917,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 99.36288110346527,
              "hasRDI": true,
              "daily": 152.8659709284081,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 34.01055845251389,
                  "hasRDI": true,
                  "daily": 170.05279226256945,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.40740000000000004,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 36.63950314018751,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 16.690820542618056,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 143.4837684753889,
              "hasRDI": true,
              "daily": 47.82792282512963,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 115.66569833066669,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 27.81807014472222,
                  "hasRDI": true,
                  "daily": 111.27228057888888,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 28.522476190659724,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 134.24366935220834,
              "hasRDI": true,
              "daily": 268.4873387044167,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 396.40000000000003,
              "hasRDI": true,
              "daily": 132.13333333333333,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 3448.0502517881946,
              "hasRDI": true,
              "daily": 143.6687604911748,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 574.89576319375,
              "hasRDI": true,
              "daily": 57.489576319375,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 419.05232018680556,
              "hasRDI": true,
              "daily": 99.77436194923942,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 4637.870370204167,
              "hasRDI": true,
              "daily": 98.67809298306737,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 22.218195036423612,
              "hasRDI": true,
              "daily": 123.43441686902007,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 12.769338912083333,
              "hasRDI": true,
              "daily": 116.08489920075758,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1491.257422209028,
              "hasRDI": true,
              "daily": 213.0367746012897,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 434.45425941388896,
              "hasRDI": true,
              "daily": 48.272695490432106,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 56.422818354722224,
              "hasRDI": true,
              "daily": 62.6920203941358,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.1385882784277779,
              "hasRDI": true,
              "daily": 94.88235653564816,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.6226990154659722,
              "hasRDI": true,
              "daily": 124.82300118969017,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 46.31100433192709,
              "hasRDI": true,
              "daily": 289.4437770745443,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.6021228299256944,
              "hasRDI": true,
              "daily": 200.16329460966878,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 390.86117044652775,
              "hasRDI": true,
              "daily": 97.71529261163194,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 390.86117044652775,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 1.624,
              "hasRDI": true,
              "daily": 67.66666666666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.3000000000000003,
              "hasRDI": true,
              "daily": 8.666666666666668,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 7.0269616613402786,
              "hasRDI": true,
              "daily": 46.84641107560186,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 126.02186429937501,
              "hasRDI": true,
              "daily": 105.01822024947917,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1654.0261906551525,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/6379680892262fe72b7daf2cfcb24965?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1da54064d59fe6e63b11823593ae6dc2",
          "label": "Chicken Soup",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e20/e20d522d53088284fc5a31f365cbdebd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=39c8b7862235cfa2b59e0c1ef0ab265bfcfc43c0efa54dabd0ec9f3d497868e5",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e20/e20d522d53088284fc5a31f365cbdebd-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2228cb796c9442f4bf2bc759cd6f8d2bffec12832e3e52688cc1d6ba4f571d7c",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e20/e20d522d53088284fc5a31f365cbdebd-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=763d92b87dbd70a9feb00dbbf09163b377d956ec34c2f9e65d824ce3090f1cdf",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e20/e20d522d53088284fc5a31f365cbdebd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=39c8b7862235cfa2b59e0c1ef0ab265bfcfc43c0efa54dabd0ec9f3d497868e5",
              "width": 300,
              "height": 300
            }
          },
          "source": "Cookstr",
          "url": "http://www.cookstr.com/recipes/chicken-soup-3-sharon-lebewohl",
          "shareAs": "http://www.edamam.com/recipe/chicken-soup-1da54064d59fe6e63b11823593ae6dc2/chicken",
          "yield": 8,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Mediterranean",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [],
          "ingredientLines": [
            "1 pound chicken parts",
            "2 stalks celery, including leafy tops, cut into 3-inch pieces",
            "1 whole chicken, thoroughly rinsed",
            "Salt to rub inside the chicken",
            "1 large whole onion, unpeeled (find one with a firm, golden-brown peel)",
            "1 large whole carrot, peeled",
            "1 medium parsnip, peeled",
            "2 teaspoons salt",
            "¼ teaspoon pepper",
            "1 bunch dill, cleaned and tied with a string"
          ],
          "ingredients": [
            {
              "text": "1 pound chicken parts",
              "quantity": 1,
              "measure": "pound",
              "food": "chicken parts",
              "weight": 453.59237,
              "foodCategory": "Poultry",
              "foodId": "food_bsarl08be0gwarb34bpviafna9d4",
              "image": "https://www.edamam.com/food-img/007/00792642367e1f55de680762f85cfb3b.jpg"
            },
            {
              "text": "2 stalks celery, including leafy tops, cut into 3-inch pieces",
              "quantity": 2,
              "measure": "stalk",
              "food": "celery",
              "weight": 80,
              "foodCategory": "vegetables",
              "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
              "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
            },
            {
              "text": "1 whole chicken, thoroughly rinsed",
              "quantity": 1,
              "measure": "<unit>",
              "food": "chicken",
              "weight": 1200,
              "foodCategory": "Poultry",
              "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
              "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            },
            {
              "text": "Salt to rub inside the chicken",
              "quantity": 0,
              "measure": null,
              "food": "Salt",
              "weight": 12.622304220000002,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "1 large whole onion, unpeeled (find one with a firm, golden-brown peel)",
              "quantity": 1,
              "measure": "<unit>",
              "food": "onion",
              "weight": 150,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "1 large whole carrot, peeled",
              "quantity": 1,
              "measure": "<unit>",
              "food": "carrot",
              "weight": 72,
              "foodCategory": "vegetables",
              "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
              "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
            },
            {
              "text": "1 medium parsnip, peeled",
              "quantity": 1,
              "measure": "<unit>",
              "food": "parsnip",
              "weight": 133,
              "foodCategory": "vegetables",
              "foodId": "food_admr9qdb3d66y9blt7afaazt0dbq",
              "image": "https://www.edamam.com/food-img/ec2/ec2f9c27d98c2ca45687f96e3e487868.jpg"
            },
            {
              "text": "2 teaspoons salt",
              "quantity": 2,
              "measure": "teaspoon",
              "food": "salt",
              "weight": 12,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "¼ teaspoon pepper",
              "quantity": 0.25,
              "measure": "teaspoon",
              "food": "pepper",
              "weight": 0.725,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "1 bunch dill, cleaned and tied with a string",
              "quantity": 1,
              "measure": "bunch",
              "food": "dill",
              "weight": 2.4,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_avhhd2padkkzx8a9swnmlb1km3qb",
              "image": "https://www.edamam.com/food-img/874/8740aacb8e1a348cd5eead1f0bb552d4.jpg"
            }
          ],
          "calories": 3787.3608877000006,
          "totalWeight": 2100.805166299829,
          "totalTime": 120,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "soup"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 3787.3608877000006,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 256.970007657,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 72.44179081880002,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.5495535145000003,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 106.588056228,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 54.73101296790001,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 48.976398425,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 36.379573425,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 12.596825,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 17.233439999999998,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 302.75942702400005,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1344.5205226,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 4864.246909587601,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 312.2762870119589,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 395.30725456299825,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 4377.552708503988,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 15.618675343789437,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 22.927396869299827,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2661.1995208999997,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 1224.5859950999998,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 61.678,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.3063174300999998,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.3004779365,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 104.70537386249998,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 6.238775273899998,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 249.42102110000002,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 249.42102110000002,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 6.5322726939999995,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 2.8535923700000003,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 7.262983977,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 92.18126477,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1474.9068589315993,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 189.36804438500002,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 395.3384733184615,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 362.2089540940001,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 16.325466141666666,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 50.3873,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 605.5188540480001,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 448.17350753333335,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 202.67695456615007,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 31.227628701195894,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 94.12077489595197,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 93.13941932987207,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 86.77041857660798,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 208.43088062999843,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 380.1713601285714,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 136.06511056666665,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 68.5311111111111,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 108.85978584166665,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 176.95984126923076,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 654.4085866406249,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 479.90579029999986,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 62.35525527500001,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 272.1780289166667,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 19.023949133333335,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 48.41989318,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 76.81772064166667,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 256.970007657,
              "hasRDI": true,
              "daily": 395.3384733184615,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 72.44179081880002,
                  "hasRDI": true,
                  "daily": 362.2089540940001,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.5495535145000003,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 106.588056228,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 54.73101296790001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 48.976398425,
              "hasRDI": true,
              "daily": 16.325466141666666,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 36.379573425,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 12.596825,
                  "hasRDI": true,
                  "daily": 50.3873,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 17.233439999999998,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 302.75942702400005,
              "hasRDI": true,
              "daily": 605.5188540480001,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1344.5205226,
              "hasRDI": true,
              "daily": 448.17350753333335,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 4864.246909587601,
              "hasRDI": true,
              "daily": 202.67695456615007,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 312.2762870119589,
              "hasRDI": true,
              "daily": 31.227628701195894,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 395.30725456299825,
              "hasRDI": true,
              "daily": 94.12077489595197,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 4377.552708503988,
              "hasRDI": true,
              "daily": 93.13941932987207,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 15.618675343789437,
              "hasRDI": true,
              "daily": 86.77041857660798,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 22.927396869299827,
              "hasRDI": true,
              "daily": 208.43088062999843,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2661.1995208999997,
              "hasRDI": true,
              "daily": 380.1713601285714,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 1224.5859950999998,
              "hasRDI": true,
              "daily": 136.06511056666665,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 61.678,
              "hasRDI": true,
              "daily": 68.5311111111111,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.3063174300999998,
              "hasRDI": true,
              "daily": 108.85978584166665,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.3004779365,
              "hasRDI": true,
              "daily": 176.95984126923076,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 104.70537386249998,
              "hasRDI": true,
              "daily": 654.4085866406249,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 6.238775273899998,
              "hasRDI": true,
              "daily": 479.90579029999986,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 249.42102110000002,
              "hasRDI": true,
              "daily": 62.35525527500001,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 249.42102110000002,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 6.5322726939999995,
              "hasRDI": true,
              "daily": 272.1780289166667,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 2.8535923700000003,
              "hasRDI": true,
              "daily": 19.023949133333335,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 7.262983977,
              "hasRDI": true,
              "daily": 48.41989318,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 92.18126477,
              "hasRDI": true,
              "daily": 76.81772064166667,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1474.9068589315993,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/1da54064d59fe6e63b11823593ae6dc2?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_430fef97323ea5ef2e980c07a9956178",
          "label": "Braised Chicken Gumbo",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/a27/a2717aabb099caf79b4bef51db079f6d.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=532a897ef00191522b1520ec4ae8ec2ab532fdbc74360e4d6061e0230b60fcae",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a27/a2717aabb099caf79b4bef51db079f6d-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f99215ebcf6b1df87915c83ac7e332e3e475ec444889b92c13e6987f8b7a7db0",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a27/a2717aabb099caf79b4bef51db079f6d-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bf6bd386434fcaf4ad828b86264eef64495f6bcbd31be665842f17bfdb64d6fd",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a27/a2717aabb099caf79b4bef51db079f6d.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=532a897ef00191522b1520ec4ae8ec2ab532fdbc74360e4d6061e0230b60fcae",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a27/a2717aabb099caf79b4bef51db079f6d-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=210dc92698265c1280cd93527817a2e82cde1ed7a013363464863b4a487bae96",
              "width": 600,
              "height": 600
            }
          },
          "source": "EatingWell",
          "url": "http://www.eatingwell.com/recipe/252348/braised-chicken-gumbo/",
          "shareAs": "http://www.edamam.com/recipe/braised-chicken-gumbo-430fef97323ea5ef2e980c07a9956178/chicken",
          "yield": 4,
          "dietLabels": [],
          "healthLabels": [
            "Sugar-Conscious",
            "Mediterranean",
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Kosher"
          ],
          "cautions": [
            "Gluten",
            "Wheat",
            "Sulfites"
          ],
          "ingredientLines": [
            "1 tablespoon extra-virgin olive oil",
            "1 medium red or green bell pepper, diced",
            "2 tablespoons all-purpose flour",
            "2 cups shredded chicken from Wine & Tomato Braised Chicken (recipe follows)",
            "2 cups sauce from Wine & Tomato Braised Chicken",
            "2 cups reduced-sodium chicken broth",
            "1 cup sliced okra, fresh or frozen (thawed)",
            "¾ cup instant brown rice (see Tip)",
            "⅛- ¼ teaspoon cayenne pepper"
          ],
          "ingredients": [
            {
              "text": "1 tablespoon extra-virgin olive oil",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "extra-virgin olive oil",
              "weight": 13.5,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "1 medium red or green bell pepper, diced",
              "quantity": 1,
              "measure": "<unit>",
              "food": "green bell pepper",
              "weight": 116.28888888888889,
              "foodCategory": "vegetables",
              "foodId": "food_bz8rcwobbzm7zhb3wh2n7aznivou",
              "image": "https://www.edamam.com/food-img/629/629dc9fddc1f8aec27fa337dd6ce2b7c.jpg"
            },
            {
              "text": "2 tablespoons all-purpose flour",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "all-purpose flour",
              "weight": 15.62499999973582,
              "foodCategory": "grains",
              "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
              "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
            },
            {
              "text": "2 cups sauce from Wine & Tomato Braised Chicken",
              "quantity": 2,
              "measure": "cup",
              "food": "Chicken",
              "weight": 280,
              "foodCategory": "Poultry",
              "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
              "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            },
            {
              "text": "2 cups reduced-sodium chicken broth",
              "quantity": 2,
              "measure": "cup",
              "food": "reduced-sodium chicken broth",
              "weight": 480,
              "foodCategory": "canned soup",
              "foodId": "food_ayzeplba2uirz7avuacubb7o4qwd",
              "image": "https://www.edamam.com/food-img/7fa/7fa80c55623028f33f40c432ef8fa5b4.jpg"
            },
            {
              "text": "1 cup sliced okra, fresh or frozen (thawed)",
              "quantity": 1,
              "measure": "cup",
              "food": "okra",
              "weight": 100,
              "foodCategory": "vegetables",
              "foodId": "food_azzxfccb55c06lalc8vfobrxispc",
              "image": "https://www.edamam.com/food-img/718/718616e8ece2ef3f1ae0187c0ff04cda.jpg"
            },
            {
              "text": "¾ cup instant brown rice (see Tip)",
              "quantity": 0.75,
              "measure": "cup",
              "food": "brown rice",
              "weight": 142.5,
              "foodCategory": "grains",
              "foodId": "food_aro09r9avsklizbsberuoaegj0uh",
              "image": "https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg"
            },
            {
              "text": "⅛- ¼ teaspoon cayenne pepper",
              "quantity": 0.1875,
              "measure": "teaspoon",
              "food": "cayenne pepper",
              "weight": 0.3375,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a8iooz3aris8gba605l07brngnrx",
              "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
            }
          ],
          "calories": 1384.9960277768162,
          "totalWeight": 1148.2513888886247,
          "totalTime": 30,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1384.9960277768162,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 60.08610236110853,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 14.824548805555146,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.2716,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 28.754588111110884,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 12.023059111110019,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 135.32661819424285,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 124.79103208313887,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 10.535586111103978,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 5.404018333332619,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 73.88018069441715,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 210.00000000000003,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1321.6724166666613,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 212.83213888884927,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 337.15438888883074,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1845.256555555273,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 8.175307222209964,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 7.779420555553707,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 976.3216527774925,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 178.755375,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 123.15411666666668,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.1561729166645929,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.6373250138875839,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 30.984552541651073,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.224755861110995,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 177.15538888812014,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 136.2178888888123,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 24.06249999959316,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1.1560000000000001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.56,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 3.6621326388882816,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 52.55026527777699,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 870.1885565277463,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 69.24980138884081,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 92.4401574786285,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 74.12274402777572,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 45.10887273141429,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 42.14234444441591,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 147.7603613888343,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 70.00000000000001,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 55.06968402777756,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 21.283213888884926,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 80.27485449734066,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 39.260777777771764,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 45.41837345672202,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 70.72200505048825,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 139.47452182535608,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 19.861708333333333,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 136.83790740740744,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 96.34774305538275,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 49.02500106827568,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 193.6534533853192,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 171.1350662393073,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 44.288847222030036,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 48.16666666666667,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.733333333333334,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 24.414217592588546,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 43.79188773148083,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 60.08610236110853,
              "hasRDI": true,
              "daily": 92.4401574786285,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 14.824548805555146,
                  "hasRDI": true,
                  "daily": 74.12274402777572,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.2716,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 28.754588111110884,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 12.023059111110019,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 135.32661819424285,
              "hasRDI": true,
              "daily": 45.10887273141429,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 124.79103208313887,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 10.535586111103978,
                  "hasRDI": true,
                  "daily": 42.14234444441591,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 5.404018333332619,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 73.88018069441715,
              "hasRDI": true,
              "daily": 147.7603613888343,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 210.00000000000003,
              "hasRDI": true,
              "daily": 70.00000000000001,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1321.6724166666613,
              "hasRDI": true,
              "daily": 55.06968402777756,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 212.83213888884927,
              "hasRDI": true,
              "daily": 21.283213888884926,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 337.15438888883074,
              "hasRDI": true,
              "daily": 80.27485449734066,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1845.256555555273,
              "hasRDI": true,
              "daily": 39.260777777771764,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 8.175307222209964,
              "hasRDI": true,
              "daily": 45.41837345672202,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 7.779420555553707,
              "hasRDI": true,
              "daily": 70.72200505048825,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 976.3216527774925,
              "hasRDI": true,
              "daily": 139.47452182535608,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 178.755375,
              "hasRDI": true,
              "daily": 19.861708333333333,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 123.15411666666668,
              "hasRDI": true,
              "daily": 136.83790740740744,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.1561729166645929,
              "hasRDI": true,
              "daily": 96.34774305538275,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.6373250138875839,
              "hasRDI": true,
              "daily": 49.02500106827568,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 30.984552541651073,
              "hasRDI": true,
              "daily": 193.6534533853192,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.224755861110995,
              "hasRDI": true,
              "daily": 171.1350662393073,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 177.15538888812014,
              "hasRDI": true,
              "daily": 44.288847222030036,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 136.2178888888123,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 24.06249999959316,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 1.1560000000000001,
              "hasRDI": true,
              "daily": 48.16666666666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.56,
              "hasRDI": true,
              "daily": 3.733333333333334,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 3.6621326388882816,
              "hasRDI": true,
              "daily": 24.414217592588546,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 52.55026527777699,
              "hasRDI": true,
              "daily": 43.79188773148083,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 870.1885565277463,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/430fef97323ea5ef2e980c07a9956178?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7879614ad1d3687818ba7a494ef0bab9",
          "label": "Roast Chicken With Chicken Livers",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/b32/b324978429b9e75525848eae95912c73.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=88d890db92f19e486d80b9922a3e693df03ad53705f09a8d76b6950207290528",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b32/b324978429b9e75525848eae95912c73-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8309dc63e759417d54087fb800ac3696b475d03fce8d02b6d8a262bd7813cf61",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b32/b324978429b9e75525848eae95912c73-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=77fcb6fae1108affc683cbeb176236482d95a710481754db6dd42fc615b5c994",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b32/b324978429b9e75525848eae95912c73.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=88d890db92f19e486d80b9922a3e693df03ad53705f09a8d76b6950207290528",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b32/b324978429b9e75525848eae95912c73-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=21ec15d7c9744abaf1b8e61785687f36607a6b5b08ba15b2d3f9035a4435d434",
              "width": 600,
              "height": 600
            }
          },
          "source": "Food & Wine",
          "url": "http://www.foodandwine.com/recipes/roast-chicken-with-chicken-livers",
          "shareAs": "http://www.edamam.com/recipe/roast-chicken-with-chicken-livers-7879614ad1d3687818ba7a494ef0bab9/chicken",
          "yield": 12,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Kidney-Friendly",
            "Keto-Friendly",
            "Paleo",
            "Mediterranean",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "One 3 3/4- to 4-pound chicken",
            "1 teaspoon coarsely chopped thyme",
            "Salt",
            "1/2 cup extra-virgin olive oil",
            "20 garlic cloves, peeled",
            "2 teaspoons coarsely crushed black peppercorns",
            "1/4 pound chicken livers, trimmed and cut into 1-inch pieces",
            "Freshly ground pepper",
            "2 tablespoons chopped Gaeta olives",
            "1 tablespoon minced flat-leaf parsley"
          ],
          "ingredients": [
            {
              "text": "One 3 3/4- to 4-pound chicken",
              "quantity": 3.875,
              "measure": "pound",
              "food": "chicken",
              "weight": 1757.67043375,
              "foodCategory": "Poultry",
              "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
              "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            },
            {
              "text": "1 teaspoon coarsely chopped thyme",
              "quantity": 1,
              "measure": "teaspoon",
              "food": "thyme",
              "weight": 0.8,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
              "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
            },
            {
              "text": "Salt",
              "quantity": 0,
              "measure": null,
              "food": "Salt",
              "weight": 12.397611157500002,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "1/2 cup extra-virgin olive oil",
              "quantity": 0.5,
              "measure": "cup",
              "food": "extra-virgin olive oil",
              "weight": 108,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "20 garlic cloves, peeled",
              "quantity": 20,
              "measure": "clove",
              "food": "garlic",
              "weight": 60,
              "foodCategory": "vegetables",
              "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
              "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
              "text": "2 teaspoons coarsely crushed black peppercorns",
              "quantity": 2,
              "measure": "teaspoon",
              "food": "black peppercorns",
              "weight": 5.8,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "1/4 pound chicken livers, trimmed and cut into 1-inch pieces",
              "quantity": 0.25,
              "measure": "pound",
              "food": "chicken livers",
              "weight": 113.3980925,
              "foodCategory": "Poultry",
              "foodId": "food_a9xs7abb632dn3aozv3w4a9351fh",
              "image": "https://www.edamam.com/food-img/9aa/9aa4760ac12b682555a37a1cdc91150b.jpg"
            },
            {
              "text": "Freshly ground pepper",
              "quantity": 0,
              "measure": null,
              "food": "pepper",
              "weight": 6.198805578750001,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "2 tablespoons chopped Gaeta olives",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "olives",
              "weight": 16.8,
              "foodCategory": "canned fruit",
              "foodId": "food_bt7u5w5a064gusa46msxfb38ag06",
              "image": "https://www.edamam.com/food-img/822/8221f2141e8dafd469414b20777735ca.jpg"
            },
            {
              "text": "1 tablespoon minced flat-leaf parsley",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "parsley",
              "weight": 3.8,
              "foodCategory": "vegetables",
              "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            }
          ],
          "calories": 3800.3909062201624,
          "totalWeight": 2082.17339973103,
          "totalTime": 0,
          "cuisineType": [
            "french"
          ],
          "mealType": [
            "brunch"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 3800.3909062201624,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 296.00550270908724,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 68.66575263177619,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.2330681782264998,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 156.22800719343198,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 51.88245657461092,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 29.824862242860625,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 24.754164431436877,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 5.07069781142375,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 0.709092355704,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 246.85824961133216,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1287.6353403374999,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 4819.481330821121,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 328.97776085490955,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 300.0558347836853,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2948.9622657792693,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 24.702945616074146,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 19.625649147884403,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2208.0738131159246,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 4252.141323235763,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 64.6277128767,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.2001084291200501,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 3.5455670086317497,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 92.94584780171459,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 5.934173885584162,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 748.4695345453874,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 748.4695345453874,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 22.506573010845,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 2.3904317899,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 20.355921910369,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 166.16148315666373,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 929.3817939139217,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 190.0195453110081,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 455.3930810909034,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 343.3287631588809,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 9.94162074762021,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 20.282791245695,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 493.71649922266425,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 429.2117801125,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 200.8117221175467,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 32.89777608549096,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 71.44186542468698,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 62.743877995303606,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 137.2385867559675,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 178.41499225349457,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 315.43911615941784,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 472.46014702619584,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 71.808569863,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 100.00903576000418,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 272.7359237409038,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 580.9115487607162,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 456.47491427570475,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 187.11738363634686,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 937.773875451875,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 15.936211932666668,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 135.70614606912665,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 138.4679026305531,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 296.00550270908724,
              "hasRDI": true,
              "daily": 455.3930810909034,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 68.66575263177619,
                  "hasRDI": true,
                  "daily": 343.3287631588809,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.2330681782264998,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 156.22800719343198,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 51.88245657461092,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 29.824862242860625,
              "hasRDI": true,
              "daily": 9.94162074762021,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 24.754164431436877,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 5.07069781142375,
                  "hasRDI": true,
                  "daily": 20.282791245695,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 0.709092355704,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 246.85824961133216,
              "hasRDI": true,
              "daily": 493.71649922266425,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1287.6353403374999,
              "hasRDI": true,
              "daily": 429.2117801125,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 4819.481330821121,
              "hasRDI": true,
              "daily": 200.8117221175467,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 328.97776085490955,
              "hasRDI": true,
              "daily": 32.89777608549096,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 300.0558347836853,
              "hasRDI": true,
              "daily": 71.44186542468698,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2948.9622657792693,
              "hasRDI": true,
              "daily": 62.743877995303606,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 24.702945616074146,
              "hasRDI": true,
              "daily": 137.2385867559675,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 19.625649147884403,
              "hasRDI": true,
              "daily": 178.41499225349457,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2208.0738131159246,
              "hasRDI": true,
              "daily": 315.43911615941784,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 4252.141323235763,
              "hasRDI": true,
              "daily": 472.46014702619584,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 64.6277128767,
              "hasRDI": true,
              "daily": 71.808569863,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.2001084291200501,
              "hasRDI": true,
              "daily": 100.00903576000418,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 3.5455670086317497,
              "hasRDI": true,
              "daily": 272.7359237409038,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 92.94584780171459,
              "hasRDI": true,
              "daily": 580.9115487607162,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 5.934173885584162,
              "hasRDI": true,
              "daily": 456.47491427570475,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 748.4695345453874,
              "hasRDI": true,
              "daily": 187.11738363634686,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 748.4695345453874,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 22.506573010845,
              "hasRDI": true,
              "daily": 937.773875451875,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 2.3904317899,
              "hasRDI": true,
              "daily": 15.936211932666668,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 20.355921910369,
              "hasRDI": true,
              "daily": 135.70614606912665,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 166.16148315666373,
              "hasRDI": true,
              "daily": 138.4679026305531,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 929.3817939139217,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/7879614ad1d3687818ba7a494ef0bab9?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b4dadfbd094da0086d5759f92e9db359",
          "label": "Smothered Chicken",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/65a/65a7ad1b644869cd901aafd23aa3bf11.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5640ce3d92c12a04019ebfa46f33c0a26a8c57a0c8e6c1f199662daa9f81376f",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/65a/65a7ad1b644869cd901aafd23aa3bf11-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f37bd4f8229c2f468dc5097ae6588a2d79f03f515a9c62e3e649eb99b3eab964",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/65a/65a7ad1b644869cd901aafd23aa3bf11-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a38b7085d7c7e2c25d27b69dd24b7f3e3048a15a976c999bd9de47c0c7200c30",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/65a/65a7ad1b644869cd901aafd23aa3bf11.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5640ce3d92c12a04019ebfa46f33c0a26a8c57a0c8e6c1f199662daa9f81376f",
              "width": 300,
              "height": 300
            }
          },
          "source": "Food Network",
          "url": "https://www.foodnetwork.com/recipes/sandra-lee/smothered-chicken-recipe-1950282",
          "shareAs": "http://www.edamam.com/recipe/smothered-chicken-b4dadfbd094da0086d5759f92e9db359/chicken",
          "yield": 4,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites",
            "FODMAP"
          ],
          "ingredientLines": [
            "3 1/2 pounds whole cut-up chicken",
            "2 (5-ounce) packets chicken fry coating (recommended: Dixie Fry)",
            "2 tablespoons salt-free chicken seasoning, divided (recommended: McCormick Grill Mates)",
            "Canola oil, for frying",
            "2 (12-ounce) jars roasted chicken gravy (recommended: Franco American)",
            "1 teaspoon crushed garlic"
          ],
          "ingredients": [
            {
              "text": "3 1/2 pounds whole cut-up chicken",
              "quantity": 3.5,
              "measure": "pound",
              "food": "chicken",
              "weight": 1587.5732950000001,
              "foodCategory": "Poultry",
              "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
              "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            },
            {
              "text": "2 (5-ounce) packets chicken fry coating (recommended: Dixie Fry)",
              "quantity": 10,
              "measure": "ounce",
              "food": "chicken",
              "weight": 283.49523125,
              "foodCategory": "Poultry",
              "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
              "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            },
            {
              "text": "2 tablespoons salt-free chicken seasoning, divided (recommended: McCormick Grill Mates)",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "chicken seasoning",
              "weight": 4.1999999997159625,
              "foodCategory": "condiments and sauces",
              "foodId": "food_aa3k2msbdflu7valodjaoafcozsu",
              "image": "https://www.edamam.com/food-img/98a/98af5a0918f05f04e85b0b9ab4a10006.jpg"
            },
            {
              "text": "Canola oil, for frying",
              "quantity": 0,
              "measure": null,
              "food": "Canola oil",
              "weight": 34.79501630499614,
              "foodCategory": "Oils",
              "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
              "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
            },
            {
              "text": "2 (12-ounce) jars roasted chicken gravy (recommended: Franco American)",
              "quantity": 24,
              "measure": "ounce",
              "food": "chicken gravy",
              "weight": 680.388555,
              "foodCategory": "canned soup",
              "foodId": "food_af7ntcsa84dhrzaxbewf2arvso4x",
              "image": "https://www.edamam.com/food-img/d00/d003966a07a0a523f0761c1e159b0ed1.jpg"
            },
            {
              "text": "1 teaspoon crushed garlic",
              "quantity": 1,
              "measure": "teaspoon",
              "food": "garlic",
              "weight": 2.8,
              "foodCategory": "vegetables",
              "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
              "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            }
          ],
          "calories": 7964.760379624098,
          "totalWeight": 2942.225643437174,
          "totalTime": 50,
          "cuisineType": [
            "mediterranean"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 7964.760379624098,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 704.67606873119,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 118.54557871197841,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 3.3308222911029572,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 376.93828760023564,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 178.64846249366926,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 38.558739680948875,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 35.17778546098949,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 3.380954219959383,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 5.528230728986934,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 361.6349249939793,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1416.9091657875001,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 4952.331441523788,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 346.9632488875,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 388.52147635,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 4289.1710395625005,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 20.08504294475,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 29.986586133875004,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2952.0674145375006,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 773.9419813125,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 30.810696420000006,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.2439071701000002,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.54092931015,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 130.2850917689125,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 6.6513586973750005,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 125.95588267500003,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 125.95588267500003,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 6.480700986375001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.742137052500001,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 73.50594165818008,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 303.10138984340716,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1817.0019533093748,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 398.2380189812049,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 1084.1170288172154,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 592.7278935598921,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 12.852913226982958,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 13.523816879837533,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 723.2698499879585,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 472.30305526250004,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 206.34714339682452,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 34.69632488875,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 92.50511341666667,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 91.25895828856385,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 111.58357191527779,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 272.6053284897728,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 421.72391636250006,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 85.99355347916666,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 34.234107133333346,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 103.65893084166669,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 195.45610078076922,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 814.2818235557032,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 511.64297672115384,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 31.488970668750007,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 270.0292077656251,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 24.947580350000006,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 490.03961105453385,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 252.58449153617264,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 704.67606873119,
              "hasRDI": true,
              "daily": 1084.1170288172154,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 118.54557871197841,
                  "hasRDI": true,
                  "daily": 592.7278935598921,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 3.3308222911029572,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 376.93828760023564,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 178.64846249366926,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 38.558739680948875,
              "hasRDI": true,
              "daily": 12.852913226982958,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 35.17778546098949,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 3.380954219959383,
                  "hasRDI": true,
                  "daily": 13.523816879837533,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 5.528230728986934,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 361.6349249939793,
              "hasRDI": true,
              "daily": 723.2698499879585,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1416.9091657875001,
              "hasRDI": true,
              "daily": 472.30305526250004,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 4952.331441523788,
              "hasRDI": true,
              "daily": 206.34714339682452,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 346.9632488875,
              "hasRDI": true,
              "daily": 34.69632488875,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 388.52147635,
              "hasRDI": true,
              "daily": 92.50511341666667,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 4289.1710395625005,
              "hasRDI": true,
              "daily": 91.25895828856385,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 20.08504294475,
              "hasRDI": true,
              "daily": 111.58357191527779,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 29.986586133875004,
              "hasRDI": true,
              "daily": 272.6053284897728,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2952.0674145375006,
              "hasRDI": true,
              "daily": 421.72391636250006,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 773.9419813125,
              "hasRDI": true,
              "daily": 85.99355347916666,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 30.810696420000006,
              "hasRDI": true,
              "daily": 34.234107133333346,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.2439071701000002,
              "hasRDI": true,
              "daily": 103.65893084166669,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.54092931015,
              "hasRDI": true,
              "daily": 195.45610078076922,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 130.2850917689125,
              "hasRDI": true,
              "daily": 814.2818235557032,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 6.6513586973750005,
              "hasRDI": true,
              "daily": 511.64297672115384,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 125.95588267500003,
              "hasRDI": true,
              "daily": 31.488970668750007,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 125.95588267500003,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 6.480700986375001,
              "hasRDI": true,
              "daily": 270.0292077656251,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 3.742137052500001,
              "hasRDI": true,
              "daily": 24.947580350000006,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 73.50594165818008,
              "hasRDI": true,
              "daily": 490.03961105453385,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 303.10138984340716,
              "hasRDI": true,
              "daily": 252.58449153617264,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1817.0019533093748,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/b4dadfbd094da0086d5759f92e9db359?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_45adb4461e9a05cb82f436b9ea4cdcbd",
          "label": "Chicken & peppers",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/adf/adf0d1e50d6ab82c373984230682fb3e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=92f82fdbf15ca2f5f8676aacdb6f29a3ea1b36d7d7d97777dc43cec39789d674",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/adf/adf0d1e50d6ab82c373984230682fb3e-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=56322ff5251557de2f321c20cbf2c740a8bc7f09dc483812e95e89d424d630c9",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/adf/adf0d1e50d6ab82c373984230682fb3e-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1a3eaee75edbd0ce4a8f2a86d2a360eb1e8580a9bf44c0dd3e1e0e669d297f82",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/adf/adf0d1e50d6ab82c373984230682fb3e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=92f82fdbf15ca2f5f8676aacdb6f29a3ea1b36d7d7d97777dc43cec39789d674",
              "width": 300,
              "height": 300
            }
          },
          "source": "The Stone Soup",
          "url": "http://thestonesoup.com/blog/2012/05/the-1-thing-you-should-never-do-when-combining-flavours/",
          "shareAs": "http://www.edamam.com/recipe/chicken-peppers-45adb4461e9a05cb82f436b9ea4cdcbd/chicken",
          "yield": 2,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Keto-Friendly",
            "Paleo",
            "Mediterranean",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Sulfite-Free",
            "FODMAP-Free",
            "Kosher"
          ],
          "cautions": [],
          "ingredientLines": [
            "4-6 chicken drumsticks",
            "2-3 large red capsicum (bell peppers), chopped"
          ],
          "ingredients": [
            {
              "text": "4-6 chicken drumsticks",
              "quantity": 5,
              "measure": "<unit>",
              "food": "chicken drumsticks",
              "weight": 665,
              "foodCategory": "Poultry",
              "foodId": "food_agzvc6lbxg03stab195szars32lx",
              "image": "https://www.edamam.com/food-img/491/4916353c22bd1ac381ac81d55597ddbe.jpg"
            },
            {
              "text": "2-3 large red capsicum (bell peppers), chopped",
              "quantity": 2.5,
              "measure": "<unit>",
              "food": "capsicum",
              "weight": 297.5,
              "foodCategory": "vegetables",
              "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
              "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
            }
          ],
          "calories": 1162.875,
          "totalWeight": 962.5,
          "totalTime": 130,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "condiments and sauces"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1162.875,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 62.0725,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 16.432675,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.31255,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 24.740275,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 13.275500000000001,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 18.67075,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 12.423250000000001,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 6.2475000000000005,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 12.495000000000001,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 123.17725,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 611.8000000000001,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 716.8000000000001,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 74.025,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 155.4,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2030.875,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 6.00075,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 13.112750000000002,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1161.3,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 560.175,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 379.9075,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.7126000000000001,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.549625,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 35.105175,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 3.1599749999999998,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 156.8,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 156.8,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 3.5245,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.665,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 5.964,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 31.2025,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 756.1837499999999,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 58.14375,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 95.49615384615385,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 82.163375,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 6.223583333333334,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 24.99,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 246.3545,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 203.93333333333337,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 29.866666666666667,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 7.402500000000001,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 37,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 43.21010638297872,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 33.337500000000006,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 119.20681818181819,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 165.9,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 62.24166666666666,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 422.11944444444447,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 59.383333333333354,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 119.20192307692308,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 219.40734375000002,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 243.075,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 39.2,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 146.85416666666669,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 4.433333333333334,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 39.760000000000005,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 26.002083333333335,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 62.0725,
              "hasRDI": true,
              "daily": 95.49615384615385,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 16.432675,
                  "hasRDI": true,
                  "daily": 82.163375,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.31255,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 24.740275,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 13.275500000000001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 18.67075,
              "hasRDI": true,
              "daily": 6.223583333333334,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 12.423250000000001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 6.2475000000000005,
                  "hasRDI": true,
                  "daily": 24.99,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 12.495000000000001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 123.17725,
              "hasRDI": true,
              "daily": 246.3545,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 611.8000000000001,
              "hasRDI": true,
              "daily": 203.93333333333337,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 716.8000000000001,
              "hasRDI": true,
              "daily": 29.866666666666667,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 74.025,
              "hasRDI": true,
              "daily": 7.402500000000001,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 155.4,
              "hasRDI": true,
              "daily": 37,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2030.875,
              "hasRDI": true,
              "daily": 43.21010638297872,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 6.00075,
              "hasRDI": true,
              "daily": 33.337500000000006,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 13.112750000000002,
              "hasRDI": true,
              "daily": 119.20681818181819,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1161.3,
              "hasRDI": true,
              "daily": 165.9,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 560.175,
              "hasRDI": true,
              "daily": 62.24166666666666,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 379.9075,
              "hasRDI": true,
              "daily": 422.11944444444447,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.7126000000000001,
              "hasRDI": true,
              "daily": 59.383333333333354,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.549625,
              "hasRDI": true,
              "daily": 119.20192307692308,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 35.105175,
              "hasRDI": true,
              "daily": 219.40734375000002,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 3.1599749999999998,
              "hasRDI": true,
              "daily": 243.075,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 156.8,
              "hasRDI": true,
              "daily": 39.2,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 156.8,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 3.5245,
              "hasRDI": true,
              "daily": 146.85416666666669,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.665,
              "hasRDI": true,
              "daily": 4.433333333333334,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 5.964,
              "hasRDI": true,
              "daily": 39.760000000000005,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 31.2025,
              "hasRDI": true,
              "daily": 26.002083333333335,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 756.1837499999999,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/45adb4461e9a05cb82f436b9ea4cdcbd?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0806132207b0892f5670d9d70078c694",
          "label": "Chicken Hash",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/b50/b500b287cd791d8c431bbd9c504f7e80.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=306a87c56af86eafb9495eb869410b6f1d3b82ea231aceb09cba34ee6d4f829b",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b50/b500b287cd791d8c431bbd9c504f7e80-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b39e6f91b2d0cb9319dc1085b1f705d19e486e482ba0077ad23fb5e328c72648",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b50/b500b287cd791d8c431bbd9c504f7e80-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3a5fb1359146a86bb2892f7a87ff47bfd847fe03b1634879b807062426dd81e1",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b50/b500b287cd791d8c431bbd9c504f7e80.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=306a87c56af86eafb9495eb869410b6f1d3b82ea231aceb09cba34ee6d4f829b",
              "width": 300,
              "height": 300
            }
          },
          "source": "Delish",
          "url": "http://www.delish.com/cooking/recipe-ideas/recipes/a33713/chicken-hash-recipe-122305/",
          "shareAs": "http://www.edamam.com/recipe/chicken-hash-0806132207b0892f5670d9d70078c694/chicken",
          "yield": 4,
          "dietLabels": [
            "High-Fiber",
            "Low-Carb"
          ],
          "healthLabels": [
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [],
          "ingredientLines": [
            "1 tbsp. oil",
            "2 large baked potatoes",
            "2 c. shredded cooked chicken",
            "3 medium carrots",
            "1 medium onion",
            "1 jar chicken gravy"
          ],
          "ingredients": [
            {
              "text": "1 tbsp. oil",
              "quantity": 1,
              "measure": "tablespoon",
              "food": "oil",
              "weight": 14,
              "foodCategory": "Oils",
              "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
              "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
            },
            {
              "text": "2 large baked potatoes",
              "quantity": 2,
              "measure": "<unit>",
              "food": "baked potatoes",
              "weight": 598,
              "foodCategory": "vegetables",
              "foodId": "food_als7tunbnyz9uqayc3mkqarb8m6m",
              "image": "https://www.edamam.com/food-img/bec/bec2a265c41dd4319dcd9b8a4a3777f5.jpg"
            },
            {
              "text": "2 c. shredded cooked chicken",
              "quantity": 2,
              "measure": "cup",
              "food": "cooked chicken",
              "weight": 280,
              "foodCategory": "Poultry",
              "foodId": "food_a59p480aae04fubjz0yo7a5auh4m",
              "image": "https://www.edamam.com/food-img/c81/c81b9affb7c9c29a861e8566bd2d0829.jpg"
            },
            {
              "text": "3 medium carrots",
              "quantity": 3,
              "measure": "<unit>",
              "food": "carrots",
              "weight": 183,
              "foodCategory": "vegetables",
              "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
              "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
            },
            {
              "text": "1 medium onion",
              "quantity": 1,
              "measure": "<unit>",
              "food": "onion",
              "weight": 110,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "1 jar chicken gravy",
              "quantity": 1,
              "measure": "<unit>",
              "food": "chicken",
              "weight": 1200,
              "foodCategory": "Poultry",
              "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
              "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            }
          ],
          "calories": 3870.45,
          "totalWeight": 2385,
          "totalTime": 25,
          "cuisineType": [
            "french"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 3870.45,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 214.6106,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 58.13633,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.2193,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 90.7965,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 47.49557,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 156.0166,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 135.26860000000002,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 20.748,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 19.7966,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 311.8673,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1110,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1264.3899999999999,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 358.93,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 511.16,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 6944.4000000000015,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 21.366600000000002,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 22.6952,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2822.13,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 2059.63,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 87.77100000000002,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.46564,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.27448,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 113.66633,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 7.84946,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 297.15000000000003,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 297.15000000000003,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 4.532,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 2.4000000000000004,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 7.6928,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 64.538,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1685.4307,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 193.5225,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 330.1701538461539,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 290.68165,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 52.00553333333334,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 82.992,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 623.7346,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 370,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 52.682916666666664,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 35.893,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 121.70476190476191,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 147.75319148936174,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 118.70333333333335,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 206.32,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 403.1614285714286,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 228.84777777777776,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 97.52333333333335,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 122.13666666666667,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 174.96,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 710.4145625,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 603.8046153846153,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 74.28750000000001,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 188.83333333333334,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 16.000000000000004,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 51.285333333333334,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 53.78166666666666,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 214.6106,
              "hasRDI": true,
              "daily": 330.1701538461539,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 58.13633,
                  "hasRDI": true,
                  "daily": 290.68165,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.2193,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 90.7965,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 47.49557,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 156.0166,
              "hasRDI": true,
              "daily": 52.00553333333334,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 135.26860000000002,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 20.748,
                  "hasRDI": true,
                  "daily": 82.992,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 19.7966,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 311.8673,
              "hasRDI": true,
              "daily": 623.7346,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1110,
              "hasRDI": true,
              "daily": 370,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1264.3899999999999,
              "hasRDI": true,
              "daily": 52.682916666666664,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 358.93,
              "hasRDI": true,
              "daily": 35.893,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 511.16,
              "hasRDI": true,
              "daily": 121.70476190476191,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 6944.4000000000015,
              "hasRDI": true,
              "daily": 147.75319148936174,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 21.366600000000002,
              "hasRDI": true,
              "daily": 118.70333333333335,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 22.6952,
              "hasRDI": true,
              "daily": 206.32,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2822.13,
              "hasRDI": true,
              "daily": 403.1614285714286,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 2059.63,
              "hasRDI": true,
              "daily": 228.84777777777776,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 87.77100000000002,
              "hasRDI": true,
              "daily": 97.52333333333335,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.46564,
              "hasRDI": true,
              "daily": 122.13666666666667,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.27448,
              "hasRDI": true,
              "daily": 174.96,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 113.66633,
              "hasRDI": true,
              "daily": 710.4145625,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 7.84946,
              "hasRDI": true,
              "daily": 603.8046153846153,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 297.15000000000003,
              "hasRDI": true,
              "daily": 74.28750000000001,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 297.15000000000003,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 4.532,
              "hasRDI": true,
              "daily": 188.83333333333334,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 2.4000000000000004,
              "hasRDI": true,
              "daily": 16.000000000000004,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 7.6928,
              "hasRDI": true,
              "daily": 51.285333333333334,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 64.538,
              "hasRDI": true,
              "daily": 53.78166666666666,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1685.4307,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/0806132207b0892f5670d9d70078c694?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_10975d81f34a05f521c2f263c19132a0",
          "label": "Chicken Poofs",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/85d/85d95cb1ec4fdb38604c9ac71896d7e8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=03242bb5e0bd525e277c43a78b02c0c94f3c92c4e2d020e070e15811ba2611fe",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/85d/85d95cb1ec4fdb38604c9ac71896d7e8-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2f9fdf9e497311af8d082a96661714ecb0b1a1b8aeaaa7d7d70195d9c05ecbf8",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/85d/85d95cb1ec4fdb38604c9ac71896d7e8-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4459e2a3641aa5416652d7172fa47165511ae644eb11698b1df505f67c02d53f",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/85d/85d95cb1ec4fdb38604c9ac71896d7e8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=03242bb5e0bd525e277c43a78b02c0c94f3c92c4e2d020e070e15811ba2611fe",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/85d/85d95cb1ec4fdb38604c9ac71896d7e8-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e3375a1ee9d829b3094a2a8478fd0480a1ff7b245efdde8643d1ffe317ed728a",
              "width": 600,
              "height": 600
            }
          },
          "source": "Men's Health",
          "url": "https://www.menshealth.com/recipes/chicken-poofs",
          "shareAs": "http://www.edamam.com/recipe/chicken-poofs-10975d81f34a05f521c2f263c19132a0/chicken",
          "yield": 6,
          "dietLabels": [],
          "healthLabels": [
            "Sugar-Conscious",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1 cup reduced-sodium stuffing mix",
            "1 1/2 cups cooked chicken breast, chopped",
            "1 cup fat-free sour cream",
            "2 containers (8 rolls in each) reduced-fat crescent rolls",
            "chicken gravy (optional)"
          ],
          "ingredients": [
            {
              "text": "1 cup reduced-sodium stuffing mix",
              "quantity": 1,
              "measure": "cup",
              "food": "stuffing mix",
              "weight": 57,
              "foodCategory": "bread, rolls and tortillas",
              "foodId": "food_b34fi73adnvb3rbrzn1u0a42m6i1",
              "image": "https://www.edamam.com/food-img/d86/d86c1ad0150ad96101aace6b6364b9ea.jpg"
            },
            {
              "text": "1 1/2 cups cooked chicken breast, chopped",
              "quantity": 1.5,
              "measure": "cup",
              "food": "cooked chicken breast",
              "weight": 210,
              "foodCategory": "Poultry",
              "foodId": "food_bncmum7a55r0byaf6mm9xbnk39my",
              "image": "https://www.edamam.com/food-img/44c/44c95571e5b3071f266e0e742e670585.jpg"
            },
            {
              "text": "1 cup fat-free sour cream",
              "quantity": 1,
              "measure": "cup",
              "food": "fat-free sour cream",
              "weight": 230,
              "foodCategory": "Dairy",
              "foodId": "food_b28xzkhbgngalsarz4ti4b3tkock",
              "image": "https://www.edamam.com/food-img/25f/25fb92b6df95864ffaefb330a8996329.jpg"
            },
            {
              "text": "2 containers (8 rolls in each) reduced-fat crescent rolls",
              "quantity": 2,
              "measure": "roll",
              "food": "crescent rolls",
              "weight": 170,
              "foodCategory": "quick breads and pastries",
              "foodId": "food_br1iu0yblw2iwjbsgy3gsavhjfx1",
              "image": "https://www.edamam.com/food-img/c14/c14c034b0ab6ed147cefae5469e5dc39.jpg"
            },
            {
              "text": "chicken gravy (optional)",
              "quantity": 0,
              "measure": null,
              "food": "chicken",
              "weight": 0,
              "foodCategory": "Poultry",
              "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
              "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            }
          ],
          "calories": 1234.82,
          "totalWeight": 667,
          "totalTime": 29,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "bread"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1234.82,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 28.713,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 9.521650000000001,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.496,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 3.4550099999999997,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 2.02341,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 151.411,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 147.037,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 4.3740000000000006,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 13.430900000000001,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 89.01399999999998,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 199.76999999999998,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 3092.75,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 413.3900000000001,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 106.70000000000002,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 974.5200000000001,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 8.3337,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 3.7801,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 777.6700000000001,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 180.5,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.57872,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.8146800000000001,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 32.24282,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1.39264,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 161.95000000000002,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 82.72,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 46.74,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1.4154,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.21000000000000002,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 0.7836000000000001,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 1.2570000000000001,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 386.22400000000005,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 61.741,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 44.173846153846156,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 47.608250000000005,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 50.470333333333336,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 17.496000000000002,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 178.02799999999996,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 66.59,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 128.86458333333334,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 41.339000000000006,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 25.40476190476191,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 20.734468085106386,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 46.29833333333333,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 34.36454545454546,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 111.09571428571428,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 20.055555555555557,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 48.22666666666667,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 62.667692307692306,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 201.517625,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 107.12615384615385,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 40.487500000000004,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 58.975,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.4000000000000001,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 5.224000000000001,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 1.0475,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 28.713,
              "hasRDI": true,
              "daily": 44.173846153846156,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 9.521650000000001,
                  "hasRDI": true,
                  "daily": 47.608250000000005,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.496,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 3.4550099999999997,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 2.02341,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 151.411,
              "hasRDI": true,
              "daily": 50.470333333333336,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 147.037,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 4.3740000000000006,
                  "hasRDI": true,
                  "daily": 17.496000000000002,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 13.430900000000001,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 89.01399999999998,
              "hasRDI": true,
              "daily": 178.02799999999996,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 199.76999999999998,
              "hasRDI": true,
              "daily": 66.59,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 3092.75,
              "hasRDI": true,
              "daily": 128.86458333333334,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 413.3900000000001,
              "hasRDI": true,
              "daily": 41.339000000000006,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 106.70000000000002,
              "hasRDI": true,
              "daily": 25.40476190476191,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 974.5200000000001,
              "hasRDI": true,
              "daily": 20.734468085106386,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 8.3337,
              "hasRDI": true,
              "daily": 46.29833333333333,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 3.7801,
              "hasRDI": true,
              "daily": 34.36454545454546,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 777.6700000000001,
              "hasRDI": true,
              "daily": 111.09571428571428,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 180.5,
              "hasRDI": true,
              "daily": 20.055555555555557,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": true,
              "daily": 0,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.57872,
              "hasRDI": true,
              "daily": 48.22666666666667,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.8146800000000001,
              "hasRDI": true,
              "daily": 62.667692307692306,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 32.24282,
              "hasRDI": true,
              "daily": 201.517625,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 1.39264,
              "hasRDI": true,
              "daily": 107.12615384615385,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 161.95000000000002,
              "hasRDI": true,
              "daily": 40.487500000000004,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 82.72,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 46.74,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 1.4154,
              "hasRDI": true,
              "daily": 58.975,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.21000000000000002,
              "hasRDI": true,
              "daily": 1.4000000000000001,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 0.7836000000000001,
              "hasRDI": true,
              "daily": 5.224000000000001,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 1.2570000000000001,
              "hasRDI": true,
              "daily": 1.0475,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 386.22400000000005,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/10975d81f34a05f521c2f263c19132a0?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_10abfbc20e802c832453500bcc50e1bd",
          "label": "Chicken Piccata",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ce0/ce0601eba5b5a77a2dcb359a0051c68c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5692ec662817913d3bb1c380c90b7ae09b6c928f8093beb4f1b4471b8131ecf1",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ce0/ce0601eba5b5a77a2dcb359a0051c68c-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=819738d400168b0947a8cd8789ca782c11bb6ed4047ffff42128c864fd53d9f0",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ce0/ce0601eba5b5a77a2dcb359a0051c68c-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b28ee3769511cf471f5a450253ba35313f47b1791f26a3ff149bfb5f9d01d169",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ce0/ce0601eba5b5a77a2dcb359a0051c68c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5692ec662817913d3bb1c380c90b7ae09b6c928f8093beb4f1b4471b8131ecf1",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ce0/ce0601eba5b5a77a2dcb359a0051c68c-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6285960ae874cb363e2cd9559840793c3b65a69c415905d3690b6758a122cdb0",
              "width": 600,
              "height": 600
            }
          },
          "source": "No Recipes",
          "url": "http://norecipes.com/blog/chicken-piccata-recipe/",
          "shareAs": "http://www.edamam.com/recipe/chicken-piccata-10abfbc20e802c832453500bcc50e1bd/chicken",
          "yield": 2,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "2 large chicken breasts",
            "1/2 cup flour",
            "3 tablespoons vegetable oil",
            "2 scallions white part only, minced",
            "3 tablespoons lemon juice",
            "1 cup chicken stock",
            "1 teaspoon honey",
            "2 tablespoons unsalted butter cut into small pieces",
            "2 tablespoons parsley minced",
            "2 tablespoons capers",
            "1 teaspoon lemon zest finely zested"
          ],
          "ingredients": [
            {
              "text": "2 large chicken breasts",
              "quantity": 2,
              "measure": "<unit>",
              "food": "chicken breasts",
              "weight": 680,
              "foodCategory": "Poultry",
              "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
              "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
            },
            {
              "text": "1/2 cup flour",
              "quantity": 0.5,
              "measure": "cup",
              "food": "flour",
              "weight": 62.5,
              "foodCategory": "grains",
              "foodId": "food_ahebfs0a985an4aubqaebbipra58",
              "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
            },
            {
              "text": "3 tablespoons vegetable oil",
              "quantity": 3,
              "measure": "tablespoon",
              "food": "vegetable oil",
              "weight": 42,
              "foodCategory": "Oils",
              "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
              "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
            },
            {
              "text": "2 scallions white part only, minced",
              "quantity": 2,
              "measure": "<unit>",
              "food": "scallions",
              "weight": 27.777777777777782,
              "foodCategory": "vegetables",
              "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
              "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
            },
            {
              "text": "3 tablespoons lemon juice",
              "quantity": 3,
              "measure": "tablespoon",
              "food": "lemon juice",
              "weight": 45.7499999992266,
              "foodCategory": "100% juice",
              "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
              "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
            },
            {
              "text": "1 cup chicken stock",
              "quantity": 1,
              "measure": "cup",
              "food": "chicken stock",
              "weight": 240,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "1 teaspoon honey",
              "quantity": 1,
              "measure": "teaspoon",
              "food": "honey",
              "weight": 7.0625000003582175,
              "foodCategory": "sugar syrups",
              "foodId": "food_b1cj2pmac27zngan87974b0a40hk",
              "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
            },
            {
              "text": "2 tablespoons unsalted butter cut into small pieces",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "unsalted butter",
              "weight": 28.4,
              "foodCategory": "Dairy",
              "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
              "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
              "text": "2 tablespoons parsley minced",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "parsley",
              "weight": 7.6,
              "foodCategory": "vegetables",
              "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            },
            {
              "text": "2 tablespoons capers",
              "quantity": 2,
              "measure": "tablespoon",
              "food": "capers",
              "weight": 17.2,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_ak4s9lna3rmnfeaz93ni0blu823w",
              "image": "https://www.edamam.com/food-img/627/627582f390a350d98c367f89c3a943fe.jpg"
            },
            {
              "text": "1 teaspoon lemon zest finely zested",
              "quantity": 1,
              "measure": "teaspoon",
              "food": "lemon zest",
              "weight": 2,
              "foodCategory": "fruit",
              "foodId": "food_bpg66j3a5vjuuga36uiiyaqeazpd",
              "image": "https://www.edamam.com/food-img/540/5405605c8e9b284243f06c0b1587ab6f.jpg"
            }
          ],
          "calories": 1752.8638888898076,
          "totalWeight": 1160.2902777773625,
          "totalTime": 0,
          "cuisineType": [
            "italian"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "condiments and sauces"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1752.8638888898076,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 86.72027777777592,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 22.096883888888573,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.3006919999999997,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 42.38627999999994,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 11.791552055555394,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 68.8400888891307,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 65.26579166691008,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 3.574297222220619,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 11.7961572224969,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 5.799725000294168,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 167.0969358333317,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 564.66,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1066.990444444451,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 100.6077499999751,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 232.53580555551636,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2776.536666666055,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 5.0087436111119965,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 5.711165833333736,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1608.1042777777302,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 291.4048888888889,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 36.870384721924715,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.836709777777592,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.5069804722222424,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 70.29072145833305,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 5.7434724444441745,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 133.13902777763025,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 133.13902777763025,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1.47628,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.42599999999999993,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 14.167142777776618,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 190.38670000000002,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 827.3374102771252,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 87.64319444449038,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 133.4158119658091,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 110.48441944444286,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 22.9466962963769,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 14.297188888882477,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 334.1938716666634,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 188.22,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 44.457935185185455,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 10.06077499999751,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 55.36566798940866,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 59.07524822693734,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 27.826353395066647,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 51.91968939394305,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 229.72918253967575,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 32.37832098765432,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 40.9670941354719,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 69.72581481479934,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 115.92157478632633,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 439.3170091145816,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 441.8055726495519,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 33.28475694440756,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 61.51166666666668,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 2.8399999999999994,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 94.4476185185108,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 158.65558333333334,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 86.72027777777592,
              "hasRDI": true,
              "daily": 133.4158119658091,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 22.096883888888573,
                  "hasRDI": true,
                  "daily": 110.48441944444286,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.3006919999999997,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 42.38627999999994,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 11.791552055555394,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 68.8400888891307,
              "hasRDI": true,
              "daily": 22.9466962963769,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 65.26579166691008,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 3.574297222220619,
                  "hasRDI": true,
                  "daily": 14.297188888882477,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 11.7961572224969,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 5.799725000294168,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 167.0969358333317,
              "hasRDI": true,
              "daily": 334.1938716666634,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 564.66,
              "hasRDI": true,
              "daily": 188.22,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1066.990444444451,
              "hasRDI": true,
              "daily": 44.457935185185455,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 100.6077499999751,
              "hasRDI": true,
              "daily": 10.06077499999751,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 232.53580555551636,
              "hasRDI": true,
              "daily": 55.36566798940866,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2776.536666666055,
              "hasRDI": true,
              "daily": 59.07524822693734,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 5.0087436111119965,
              "hasRDI": true,
              "daily": 27.826353395066647,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 5.711165833333736,
              "hasRDI": true,
              "daily": 51.91968939394305,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1608.1042777777302,
              "hasRDI": true,
              "daily": 229.72918253967575,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 291.4048888888889,
              "hasRDI": true,
              "daily": 32.37832098765432,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 36.870384721924715,
              "hasRDI": true,
              "daily": 40.9670941354719,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.836709777777592,
              "hasRDI": true,
              "daily": 69.72581481479934,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.5069804722222424,
              "hasRDI": true,
              "daily": 115.92157478632633,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 70.29072145833305,
              "hasRDI": true,
              "daily": 439.3170091145816,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 5.7434724444441745,
              "hasRDI": true,
              "daily": 441.8055726495519,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 133.13902777763025,
              "hasRDI": true,
              "daily": 33.28475694440756,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 133.13902777763025,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 1.47628,
              "hasRDI": true,
              "daily": 61.51166666666668,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.42599999999999993,
              "hasRDI": true,
              "daily": 2.8399999999999994,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 14.167142777776618,
              "hasRDI": true,
              "daily": 94.4476185185108,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 190.38670000000002,
              "hasRDI": true,
              "daily": 158.65558333333334,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 827.3374102771252,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/10abfbc20e802c832453500bcc50e1bd?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8868b222a71cadfa850a188c6b9d2123",
          "label": "Crispy Chicken Dippers",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c7b/c7bec34abe4f37580a4b5ffec912a956.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7736e2a21fe3c8459d47d938ad7316b0b009f55e4caebef562607cbe7e9f1316",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c7b/c7bec34abe4f37580a4b5ffec912a956-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bb017dbae053f53968a769a0c9cc1b8f80ca3eeeb9515215d637159f2046b7db",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c7b/c7bec34abe4f37580a4b5ffec912a956-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=23304219f37750321d73a6306db8b204c3a5786c8c5c12d5b3f38678bc6e4c75",
              "width": 200,
              "height": 200
            },
            "regular": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c7b/c7bec34abe4f37580a4b5ffec912a956.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7736e2a21fe3c8459d47d938ad7316b0b009f55e4caebef562607cbe7e9f1316",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c7b/c7bec34abe4f37580a4b5ffec912a956-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLWVhc3QtMSJHMEUCIGk%2FtKAFdxk%2Ba872jMXd5w1C5kko2e6hzp7W57nmRcB4AiEAt8UiV7LzXTRUoIlEQbDwDJtIUsk5ubp4s%2BGcADm1XBAq1QQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMZPbGSEFLAndHFOqyqpBBIm4uDyp8vcip%2FcgA4QDE3ZEFacSGQmrOzjd3GFIVfaZdF80115SLkVuue%2BKDhvyhikec8kTOh2wyNiObZAJXBxXPe8Q7OBb7Lt49eVNpvNcJzO%2FV6me82ISTZLcDnQ7OmelnlB7%2BZ1aKJWlWXh6zTbNMft7kYs41sbW1LEX%2BUn4OqQW%2Bi8a7BIKrjSqBoWI%2FwrGsd%2FMi5N8uf5g8zSoXEvrjC6EW%2B1yV0ks7OE8JCUQhmKJ3l5pzMOtzJ9zDBvqb2vNPxgq887soNGdW7Ax085UWKvLz0W9GVAhz%2BKEXeMY%2BQ61HEFbQwN4VA4duwEjNMzIXetyh%2FLFvWhhxRb61OHRXewK%2B%2Bq9acqsZs3Umi%2B1U%2Bwu1XvMWPew0psnx6O0VMTIL65whikVlEhhtLM%2BQK4239W0WhWF5fRn%2F7AlqUwIjKlzEzzDXkY6cWx8fHpIeoR05%2BuDzRJ8zV9Hy%2FgGT0Wkzm8DC0py1EARweDj%2FHUF5oVMZ2GcqxSDXUvp2EI%2BaQRQ7dIYCrm7WLUbmfvsRutHpQloxav%2Fb2Fes78LIacozCxGQNt0jPRbdlx%2BRD6p3ed%2FMC2lIm9fqf8BvIweyHy4BVdvF0Fjy66sEFtANDjoPlFUQMI0kqjwHh8MeuN0ZSZMnDw34Ma1SAAYtDoPCSOxs039lOGDsvrIfMRo1PsXWAUbIW26WB6IZGLRXVjiA5aQfnMF47c2DSQkO4TBoSqvLLPB1rc4d0w5tmLnQY6qQEZnrjRqAR%2FYP3NBeOOH63Gj%2BUx1eYVxxZqVIE4W%2F6EDFzqjrwmBRiygXzXcD3MC%2B2qG5%2FSL5kQ%2FaLV1fqfYe65ZHIYXzzG07%2Baq1vwbCRgm9ZbjzhQhnXPYpiNueDJBB9EiEK1U3LTHcSZS%2BUkHSzZgqmkmcWiATJ8pANR5T5ZAiNdjfddQ%2BqgD6BeKMTZdTCVQCBdj5NY69mXCaiU79ZH36r6IjfW2sYb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221221T114433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK3HKNYUA%2F20221221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1178660df215a292a7bcc99e3644486134766b93ad95b5f27acc6fa64bc92658",
              "width": 600,
              "height": 600
            }
          },
          "source": "The Daily Meal",
          "url": "http://www.thedailymeal.com/recipes/crispy-chicken-dippers-recipe",
          "shareAs": "http://www.edamam.com/recipe/crispy-chicken-dippers-8868b222a71cadfa850a188c6b9d2123/chicken",
          "yield": 4,
          "dietLabels": [
            "Balanced",
            "High-Fiber"
          ],
          "healthLabels": [
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free"
          ],
          "cautions": [
            "Soy",
            "Sulfites"
          ],
          "ingredientLines": [
            "24 Ounces Tyson Crispy Chicken Strips",
            "2 cans crescent rolls",
            "21½ Ounces Cream of Chicken soup",
            "½ Teaspoon pepper",
            "16 baby carrots",
            "16 sticks celery"
          ],
          "ingredients": [
            {
              "text": "24 Ounces Tyson Crispy Chicken Strips",
              "quantity": 24,
              "measure": "ounce",
              "food": "Chicken Strips",
              "weight": 680.388555,
              "foodCategory": "sandwhiches",
              "foodId": "food_bpbsk7zaearxssa39q2fia84qudv",
              "image": "https://www.edamam.com/food-img/cc3/cc359f770f8f4d9ab2eeb40cc7bf6768.jpg"
            },
            {
              "text": "2 cans crescent rolls",
              "quantity": 2,
              "measure": "can",
              "food": "crescent rolls",
              "weight": 936,
              "foodCategory": "quick breads and pastries",
              "foodId": "food_br1iu0yblw2iwjbsgy3gsavhjfx1",
              "image": "https://www.edamam.com/food-img/c14/c14c034b0ab6ed147cefae5469e5dc39.jpg"
            },
            {
              "text": "21½ Ounces Cream of Chicken soup",
              "quantity": 21.5,
              "measure": "ounce",
              "food": "Cream of Chicken soup",
              "weight": 609.5147471875,
              "foodCategory": "canned soup",
              "foodId": "food_bss83roarr59m6ahbwlfnb138xbk",
              "image": "https://www.edamam.com/food-img/525/525584dcb2f4c027b7d0063e4204ba33.jpg"
            },
            {
              "text": "½ Teaspoon pepper",
              "quantity": 0.5,
              "measure": "teaspoon",
              "food": "pepper",
              "weight": 1.45,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "16 baby carrots",
              "quantity": 16,
              "measure": "<unit>",
              "food": "baby carrots",
              "weight": 160,
              "foodCategory": "vegetables",
              "foodId": "food_bg0rlw7bt25ojiavi5k7dbv51765",
              "image": "https://www.edamam.com/food-img/954/9546f1fd29336cab2ecf552935d03206.jpg"
            },
            {
              "text": "16 sticks celery",
              "quantity": 16,
              "measure": "stick",
              "food": "celery",
              "weight": 640,
              "foodCategory": "vegetables",
              "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
              "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
            }
          ],
          "calories": 5296.93575651875,
          "totalWeight": 3027.3533021875,
          "totalTime": 0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "condiments and sauces"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 5296.93575651875,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 237.56887433521874,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 65.72653593592187,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 8.5906020486,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 45.621105908675005,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 46.450082898253136,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 591.0851566361249,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 553.6336439761249,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 37.45151266,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 65.2702138548125,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 0,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 208.5253862540625,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 375.34768617500004,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 20125.83151320625,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 729.90161895625,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 303.7688852875,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 4898.982036271876,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 36.174887771687494,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 7.71960650734375,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2308.3362967281255,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 1527.694497940625,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 32.0937888521875,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.011630327634375,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.9232822971562502,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 61.25099887332501,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 3.5442747443,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 442.52616259375,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 374.48730709375,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 40.8233133,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1.0886216880000001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.3607771100000001,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 26.602776828312503,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 284.35483903468753,
              "unit": "µg"
            },
            "Sugar.alcohol": {
              "label": "Sugar alcohol",
              "quantity": 0,
              "unit": "g"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1915.2825453496562,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 264.8467878259375,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 365.4905759003365,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 328.6326796796094,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 197.02838554537496,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 149.80605064,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 417.050772508125,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 125.11589539166668,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 838.5763130502604,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 72.99016189562501,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 72.32592506845238,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 104.23366034621013,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 200.9715987315972,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 70.17824097585228,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 329.76232810401797,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 169.7438331045139,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 35.659765391319446,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 84.30252730286459,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 147.9447920889423,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 382.8187429582813,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 272.6365187923077,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 110.6315406484375,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 45.35923700000001,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 9.071847400000001,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 177.35184552208335,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 236.9623658622396,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 237.56887433521874,
              "hasRDI": true,
              "daily": 365.4905759003365,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 65.72653593592187,
                  "hasRDI": true,
                  "daily": 328.6326796796094,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 8.5906020486,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 45.621105908675005,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 46.450082898253136,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 591.0851566361249,
              "hasRDI": true,
              "daily": 197.02838554537496,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 553.6336439761249,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 37.45151266,
                  "hasRDI": true,
                  "daily": 149.80605064,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 65.2702138548125,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 208.5253862540625,
              "hasRDI": true,
              "daily": 417.050772508125,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 375.34768617500004,
              "hasRDI": true,
              "daily": 125.11589539166668,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 20125.83151320625,
              "hasRDI": true,
              "daily": 838.5763130502604,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 729.90161895625,
              "hasRDI": true,
              "daily": 72.99016189562501,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 303.7688852875,
              "hasRDI": true,
              "daily": 72.32592506845238,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 4898.982036271876,
              "hasRDI": true,
              "daily": 104.23366034621013,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 36.174887771687494,
              "hasRDI": true,
              "daily": 200.9715987315972,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 7.71960650734375,
              "hasRDI": true,
              "daily": 70.17824097585228,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2308.3362967281255,
              "hasRDI": true,
              "daily": 329.76232810401797,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 1527.694497940625,
              "hasRDI": true,
              "daily": 169.7438331045139,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 32.0937888521875,
              "hasRDI": true,
              "daily": 35.659765391319446,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.011630327634375,
              "hasRDI": true,
              "daily": 84.30252730286459,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.9232822971562502,
              "hasRDI": true,
              "daily": 147.9447920889423,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 61.25099887332501,
              "hasRDI": true,
              "daily": 382.8187429582813,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 3.5442747443,
              "hasRDI": true,
              "daily": 272.6365187923077,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 442.52616259375,
              "hasRDI": true,
              "daily": 110.6315406484375,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 374.48730709375,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 40.8233133,
              "hasRDI": false,
              "daily": 0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 1.0886216880000001,
              "hasRDI": true,
              "daily": 45.35923700000001,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.3607771100000001,
              "hasRDI": true,
              "daily": 9.071847400000001,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 26.602776828312503,
              "hasRDI": true,
              "daily": 177.35184552208335,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 284.35483903468753,
              "hasRDI": true,
              "daily": 236.9623658622396,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1915.2825453496562,
              "hasRDI": false,
              "daily": 0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/8868b222a71cadfa850a188c6b9d2123?type=public&app_id=754631f8&app_key=03f930176ad01973932af54bd06d9ed9"
          }
        }
      }
    ]
  }
  export default data