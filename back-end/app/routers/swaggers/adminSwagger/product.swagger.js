/**
 * @swagger
 *  components :
 *      schemas :
 *          Colors :
 *              type : array
 *              description : the colors of product
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *          CreateProduct :
 *              type : object
 *              required :
 *                  -   title
 *                  -   short_title
 *                  -   text
 *                  -   short_text
 *                  -   category
 *                  -   price
 *                  -   discount
 *                  -   count
 *                  -   colors
 *                  -   tags
 *              properties :
 *                  title :
 *                      type : string
 *                      description : the title of product
 *                  short_title :
 *                      type : string
 *                      description : the short title of product
 *                  text :
 *                      type : string
 *                      description : the text of product
 *                  short_text :
 *                      type : string
 *                      description : the short text of product
 *                  images :
 *                      type : array
 *                      items :
 *                          type : string
 *                          format : binary
 *                  tags :
 *                      type : array
 *                      description : the tags of product
 *                  category :
 *                      type : string
 *                      description : the id of category for product
 *                  price :
 *                      type : string
 *                      description : the price of product
 *                  discount :
 *                      type : string
 *                      description : the discount of product
 *                  count :
 *                      type : string
 *                      description : the count of product
 *                  colors :
 *                       $ref : '#/components/schemas/Colors'
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *          UpdateProduct :
 *              type : object
 *              properties :
 *                  title :
 *                      type : string
 *                      description : title of product
 *                  short_title :
 *                      type : string
 *                      description : the short title of product
 *                  text :
 *                      type : string
 *                      description : the text of product
 *                  short_text :
 *                      type : string
 *                      description : the short text of product
 *                  images :
 *                      type : array
 *                      items :
 *                          type : string
 *                          format : binary
 *                  tags :
 *                      type : array
 *                      description : the tags of product
 *                  category :
 *                      type : string
 *                      description : the id of category for product
 *                  price :
 *                      type : string
 *                      description : the price of product
 *                  discount :
 *                      type : string
 *                      description : the discount of product
 *                  count :
 *                      type : string
 *                      description : the count of product
 *                  colors :
 *                       $ref : '#/components/schemas/Colors'
 */
/**
 * @swagger
 *  components :
 *      schemas :
 *          Features :
 *              type : object
 *              required :
 *                  -   feature_title
 *                  -   feature_description
 *              properties :
 *                  feature_title :
 *                      type : string
 *                      description : add title for feature
 *                  feature_description :
 *                      type : string
 *                      description : add description for feature
 *
 */
/**
 * @swagger
 *  components :
 *      schemas :
 *          RemoveFeature :
 *              type : object
 *              required :
 *                  -   title
 *              properties :
 *                  title :
 *                      type : string
 *                      description : title for feature
 *
 */

/**
 * @swagger
 *  /admin/product/add :
 *      post :
 *          tags : [Product(AdminPanel)]
 *          summary : create product
 *          requestBody :
 *              required : true
 *              content :
 *                  multipart/form-data :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateProduct'
 *          responses :
 *              201 :
 *                  description : create - product created
 *                  content : 
 *                      application/json : 
 *                          schema : 
 *                              $ref : '#/definitions/AddProduct'
 */

/**
 * @swagger
 *  /admin/product/list :
 *      get :
 *          tags : [Product(AdminPanel)]
 *          summary : get all products
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json : 
 *                          schema : 
 *                              $ref : '#/definitions/ProductList'
 */

/**
 * @swagger
 *  /admin/product/search :
 *      get :
 *          tags : [Product(AdminPanel)]
 *          summary : get products with search query
 *          parameters :
 *              -   in : query
 *                  name : search
 *                  type : string
 *                  description : text for search in title short_title text short_text tags
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json : 
 *                          schema : 
 *                              $ref : '#/definitions/ProductList'
 */
/**
 * @swagger
 *  /admin/product/add-features/{field} :
 *      patch :
 *          tags : [Product(AdminPanel)]
 *          summary : add features for products
 *          parameters :
 *              -   in : path
 *                  name : field
 *                  type : string
 *                  required : true
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/Features'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/Features'
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json : 
 *                          schema : 
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
/**
 * @swagger
 *  /admin/product/remove-feature/{productID} :
 *      patch :
 *          tags : [Product(AdminPanel)]
 *          summary : add features for products
 *          parameters :
 *              -   in : path
 *                  name : productID
 *                  type : string
 *                  required : true'
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/RemoveFeature'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/RemoveFeature'
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json : 
 *                          schema : 
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
/**
 * @swagger
 *  /admin/product/remove-product/{field} :
 *      delete :
 *          tags : [Product(AdminPanel)]
 *          summary : remove product with id or title
 *          parameters :
 *              -   in : path
 *                  name : field
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json : 
 *                          schema : 
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
/**
 * @swagger
 *  /admin/product/update-product/{field} :
 *      patch :
 *          tags : [Product(AdminPanel)]
 *          summary : update product with id or title
 *          parameters :
 *              -   in : path
 *                  name : field
 *                  type : string
 *                  required : true
 *          requestBody :
 *              required : true
 *              content :
 *                  multipart/form-data :
 *                      schema :
 *                          $ref : '#/components/schemas/UpdateProduct'
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json : 
 *                          schema : 
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */

/**
 * @swagger
 *  /admin/product/{field} :
 *      get :
 *          tags : [Product(AdminPanel)]
 *          summary : get one product with id or title
 *          parameters :
 *              -   in : path
 *                  name : field
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json : 
 *                          schema : 
 *                              $ref : '#/definitions/ProductList'
 */
/**
 * @swagger
 *  /admin/product/like/{productID} :
 *      get :
 *          tags : [Product(AdminPanel)]
 *          summary : like product
 *          parameters :
 *              -   in : path
 *                  name : productID
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json : 
 *                          schema : 
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
/**
 * @swagger
 *  /admin/product/dislike/{productID} :
 *      get :
 *          tags : [Product(AdminPanel)]
 *          summary : dislike product
 *          parameters :
 *              -   in : path
 *                  name : productID
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json : 
 *                          schema : 
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
/**
 * @swagger
 *  /admin/product/bookmark/{productID} :
 *      get :
 *          tags : [Product(AdminPanel)]
 *          summary : bookmark product
 *          parameters :
 *              -   in : path
 *                  name : productID
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success
 *                  content : 
 *                      application/json : 
 *                          schema : 
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
