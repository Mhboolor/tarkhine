/**
 * @swagger
 *  definitions :
 *      HomeDefinitions :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 */

/**
 * @swagger
 *  definitions :
 *      GetOtpAuth :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      code :
 *                          type : integer
 *                          example : 40504
 *                      mobile :
 *                          type : string
 *                          example : 09010000000
 */

/**
 * @swagger
 *  definitions :
 *      OTP :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      accessToken :
 *                          type : string
 *                          example : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTg5MDAwMDAwMCIsImlhdCI6MTY5MTY3NzI5MywiZXhwIjoxNjkxNzYzNjkzfQ.EaNIWGXyFAegK8xhj1fJDVBzrpBo964PpD17AR9TPFY
 *                      refreshToken :
 *                          type : string
 *                          example : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTg5MDAwMDAwMCIsImlhdCI6MTY5MTY3NzI5MywiZXhwIjoxNzIzMjM0ODkzfQ.XUjI66vRysE52m_kE8r3uS164GAfthkkzzk3LkGQWNw
 *                      user :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : 64d4f001d80fe1c13ccd3f67
 *                              mobile :
 *                                  type : string
 *                                  example : 09890000000
 *                              otp :
 *                                  type : object
 *                                  properties :
 *                                      code :
 *                                          type : integer
 *                                          example : 40504
 *                              role :
 *                                          type : string
 *                                          example : USER
 */

/**
 * @swagger
 *  definitions :
 *      Register :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      user :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : 64e251a4042ae0cb270eb218
 *                              first_name :
 *                                  type : string
 *                                  example : anything
 *                              last_name :
 *                                  type : string
 *                                  example : anything
 *                              username :
 *                                  type : string
 *                                  example : anything
 *                              mobile :
 *                                  type : string
 *                                  example : 09011111111
 *                              email :
 *                                  type : string
 *                                  example : www.anything@gmail.com
 *                              role :
 *                                  type : string
 *                                  example : USER
 *                      accessToken :
 *                          type : string
 *                          example : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTIxNTk1NzkxMiIsImlhdCI6MTY5MjU1MzYzNiwiZXhwIjoxNjkyNjQwMDM2fQ.EuqZAoUh-fHKf1qmyp1b2cCEjGjNkGAjvhTqHw9NH08
 */

/**
 * @swagger
 *  definitions :
 *      Login :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      accessToken :
 *                          type : string
 *                          example : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTIxNTk1NzkxMiIsImlhdCI6MTY5MjU1MjgzMywiZXhwIjoxNjkyNjM5MjMzfQ.ByR8_07m6a5HBxQR_cOqsI2p24eKZ3R7X1h1J9BTDhg
 */

/**
 * @swagger
 *  definitions :
 *      Comment :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      createCommentForBlog :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : 64d0287d7b87c59c3ad8bdcc
 *                              show :
 *                                  type : integer
 *                                  example : 0
 *                              user :
 *                                  type : string
 *                                  example : 64d0287d7b87c59c3ad8bdcc
 *                              comment :
 *                                  type : string
 *                                  example : the best comment
 *                              openToComment :
 *                                  type : boolean
 *                                  example : true
 *                              blogName :
 *                                  type : string
 *                                  example : 64d0287d7b87c59c3ad8bdcc
 *                              productName :
 *                                  type : string
 *                                  example : 64d0287d7b87c59c3ad8bdcc
 *                              answers :
 *                                  type : array
 */
/**
 * @swagger
 *  definitions :
 *      Contact :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      contact :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : 64d0287d7b87c59c3ad8bdcc
 *                              name :
 *                                  type : string
 *                                  example : cyrus
 *                              email :
 *                                  type : string
 *                                  example : www.cyrus0629@gmail.com
 *                              phone :
 *                                  type : string
 *                                  example : 09111111111
 *                              answer :
 *                                  type : boolean
 *                                  example : false
 *                              body :
 *                                  type : string
 *                                  example : this is test body
 */
/**
 * @swagger
 *  definitions :
 *      AnswerContact :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      contact :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : 64d0287d7b87c59c3ad8bdcc
 *                              email :
 *                                  type : string
 *                                  example : www.cyrus0629@gmail.com
 *                              answer :
 *                                  type : boolean
 *                                  example : true
 */

/**
 * @swagger
 *  definitions :
 *      Department :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      department :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : 64d0287d7b87c59c3ad8bdcc
 *                              title :
 *                                  type : string
 *                                  example : everything
 */
/**
 * @swagger
 *  definitions :
 *      DepartmentList :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      list :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : 64d0287d7b87c59c3ad8bdcc
 *                              title :
 *                                  type : string
 *                                  example : everything
 */
/**
 * @swagger
 *  definitions :
 *      DepartmentSub :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      departmentSub :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : 64d0287d7b87c59c3ad8bdcc
 *                              title :
 *                                  type : string
 *                                  example : everything
 *                              parent :
 *                                  type : string
 *                                  example : 64d0287d7b87c59c3ad8bdcc
 */

/**
 * @swagger
 *  definitions :
 *      DepartmentSubList :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      list :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : 64d0287d7b87c59c3ad8bdcc
 *                              title :
 *                                  type : string
 *                                  example : everything
 *                              parent :
 *                                  type : object
 *                                  properties :
 *                                      title :
 *                                          type : string
 *                                          example : everything
 */

/**
 * @swagger
 *  definitions :
 *      PermissionDefinition :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for permission
 *                      permissions :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c51bbdcc2bffaac359da5d"
 *                                  name :
 *                                      type : string
 *                                      example : all
 *                                  description :
 *                                      type : string
 *                                      example : the best description for permission
 */

/**
 * @swagger
 *  definitions :
 *      CategoryDefinition :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for permission
 *                      category :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c51bbdcc2bffaac359da5d"
 *                                  title :
 *                                      type : string
 *                                      example : the title of category
 *                                  parent :
 *                                      type : string
 *                                      example : the id of parent category
 */

/**
 * @swagger
 *  definitions :
 *      ListCategoryDefinition :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for permission
 *                      categories :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c51bbdcc2bffaac359da5d"
 *                                  title :
 *                                      type : string
 *                                      example : the title of category
 *                                  children :
 *                                      type : array
 *                                      items :
 *                                          type : object
 *                                          properties :
 *                                              _id :
 *                                                  type : string
 *                                                  example : "64c51bbdcc2bffaac359da5d"
 *                                              title :
 *                                                  type : string
 *                                                  example : the title of category
 *                                              parent :
 *                                                  type : string
 *                                                  example : the id of parent category
 *                                              children :
 *                                                  type : array
 *                                                  items :
 *                                                      type : object
 */

/**
 * @swagger
 *  definitions :
 *      DeleteAndUpdate :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for routes
 */

/**
 * @swagger
 *  definitions :
 *      Create :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      roles :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c53b2e2eb15b78bb369ce9"
 *                                  title :
 *                                      type : string
 *                                      example : the best title
 *                                  description :
 *                                      type : string
 *                                      example : the best description
 *                                  permissions :
 *                                      type : array
 *                                      items :
 *                                          type : object
 *                                          properties :
 *                                              _id :
 *                                                  type : string
 *                                                  example : "64c53b2e2eb15b78bb369ce9"
 *                                              title :
 *                                                  type : string
 *                                                  example : the best title
 *                                              description :
 *                                                 type : string
 *                                                 example : the best description
 */

/**
 * @swagger
 *  definitions :
 *      CreateBlog :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      blog :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c53b2e2eb15b78bb369ce9"
 *                                  title :
 *                                      type : string
 *                                      example : the best title
 *                                  text :
 *                                      type : string
 *                                      example : the best text
 *                                  short_text :
 *                                      type : string
 *                                      example : the best short text
 *                                  tags :
 *                                      type : array
 *                                      items :
 *                                          type : string
 *
 *                                  category :
 *                                      type : string
 *                                      example : the id of category blog
 *                                  author :
 *                                      type : string
 *                                      example : the id of author blog
 *                                  images :
 *                                      type : array
 *                                      items :
 *                                          type : string
 */

/**
 * @swagger
 *  definitions :
 *      CreateMenu :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      menu :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c7a63c69c2d3480160f729"
 *                                  title :
 *                                      type : string
 *                                      example : the title of menu
 */

/**
 * @swagger
 *  definitions :
 *      CreateSubmenu :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      menu :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : "64c7a63c69c2d3480160f729"
 *                              title :
 *                                  type : string
 *                                  example : the title of menu
 *                              submenu :
 *                                  type : array
 *                                  items :
 *                                      type : object
 *                                      properties :
 *                                          _id :
 *                                              type : string
 *                                              example : "64c7a63c69c2d3480160f729"
 *                                          title :
 *                                              type : string
 *                                              example : the title of submenu
 */
/**
 * @swagger
 *  definitions :
 *      CreateOff :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      newOff :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : "64c7a63c69c2d3480160f729"
 *                              code :
 *                                  type : string
 *                                  example : w-70
 *                              percent :
 *                                  type : string
 *                                  example : 70
 *                              product :
 *                                  type : string
 *                                  example : 64d027327b87c59c3ad8bdba
 *                              max :
 *                                  type : integer
 *                                  example : 123
 *                              uses :
 *                                  type : integer
 *                                  example : 0
 *                              creator :
 *                                  type : string
 *                                  example : 64d027327b87c59c3ad8bdba
 */
/**
 * @swagger
 *  definitions :
 *      ListOff :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      list :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : "64c7a63c69c2d3480160f729"
 *                              code :
 *                                  type : string
 *                                  example : w-70
 *                              percent :
 *                                  type : string
 *                                  example : 70
 *                              product :
 *                                  type : object
 *                                  properties :
 *                                      title :
 *                                          type : string
 *                                          example : everything
 *                                      short_title :
 *                                          type : string
 *                                          example : everything
 *                                      text :
 *                                          type : string
 *                                          example : everything
 *                                      short_text :
 *                                          type : string
 *                                          example : everything
 *                              max :
 *                                  type : integer
 *                                  example : 123
 *                              uses :
 *                                  type : integer
 *                                  example : 0
 *                              creator :
 *                                  type : object
 *                                  properties :
 *                                      first_name :
 *                                          type : string
 *                                          example : everything
 *                                      last_name :
 *                                          type : string
 *                                          example : everything
 *                                      username :
 *                                          type : string
 *                                          example : everything
 */
/**
 * @swagger
 *  definitions :
 *      SetAll :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 */
/**
 * @swagger
 *  definitions :
 *      getOff :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      off :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : "64c7a63c69c2d3480160f729"
 *                              code :
 *                                  type : string
 *                                  example : w-70
 *                              percent :
 *                                  type : string
 *                                  example : 70
 *                              product :
 *                                  type : object
 *                                  properties :
 *                                      title :
 *                                          type : string
 *                                          example : everything
 *                                      short_title :
 *                                          type : string
 *                                          example : everything
 *                                      text :
 *                                          type : string
 *                                          example : everything
 *                                      short_text :
 *                                          type : string
 *                                          example : everything
 *                              max :
 *                                  type : integer
 *                                  example : 123
 *                              uses :
 *                                  type : integer
 *                                  example : 1
 */
/**
 * @swagger
 *  definitions :
 *      AddProduct :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      product :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : "64c7a63c69c2d3480160f729"
 *                              title :
 *                                  type : string
 *                                  example : everything
 *                              short_title :
 *                                  type : string
 *                                  example : everything
 *                              text :
 *                                  type : string
 *                                  example : everything
 *                              short_text :
 *                                  type : string
 *                                  example : everything
 *                              images :
 *                                  type : array
 *                                  items :
 *                                      type : string
 *                              tags :
 *                                  type : array
 *                                  items :
 *                                      type : string
 *                              category :
 *                                  type : string
 *                                  example : 64c7a63c69c2d3480160f729
 *                              likes :
 *                                  type : array
 *                                  items :
 *                                      type : object
 *                              dislikes :
 *                                  type : array
 *                                  items :
 *                                      type : object
 *                              bookmarks :
 *                                  type : array
 *                                  items :
 *                                      type : object
 *                              price :
 *                                  type : integer
 *                                  example : 78000
 *                              discount :
 *                                  type : integer
 *                                  example : 10
 *                              count :
 *                                  type : integer
 *                                  example : 125
 *                              supplier :
 *                                  type : string
 *                                  example : 64c7a63c69c2d3480160f729
 *                              colors :
 *                                  type : array
 *                                  items :
 *                                      type : string
 */
/**
 * @swagger
 *  definitions :
 *      ProductList :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      product :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : "64c7a63c69c2d3480160f729"
 *                              title :
 *                                  type : string
 *                                  example : everything
 *                              short_title :
 *                                  type : string
 *                                  example : everything
 *                              text :
 *                                  type : string
 *                                  example : everything
 *                              short_text :
 *                                  type : string
 *                                  example : everything
 *                              images :
 *                                  type : array
 *                                  items :
 *                                      type : string
 *                              tags :
 *                                  type : array
 *                                  items :
 *                                      type : string
 *                              category :
 *                                  type : string
 *                                  example : 64c7a63c69c2d3480160f729
 *                              likes :
 *                                  type : array
 *                                  items :
 *                                      type : object
 *                                      properties :
 *                                          first_name :
 *                                              type : string
 *                                              example : everything
 *                                          last_name :
 *                                              type : string
 *                                              example : everything
 *                                          username :
 *                                              type : string
 *                                              example : everything
 *                                          role :
 *                                              type : string
 *                                              example : everything
 *                              dislikes :
 *                                  type : array
 *                                  items :
 *                                      type : object
 *                                      properties :
 *                                          first_name :
 *                                              type : string
 *                                              example : everything
 *                                          last_name :
 *                                              type : string
 *                                              example : everything
 *                                          username :
 *                                              type : string
 *                                              example : everything
 *                                          role :
 *                                              type : string
 *                                              example : everything
 *                              bookmarks :
 *                                  type : array
 *                                  items :
 *                                      type : object
 *                                      properties :
 *                                          first_name :
 *                                              type : string
 *                                              example : everything
 *                                          last_name :
 *                                              type : string
 *                                              example : everything
 *                                          username :
 *                                              type : string
 *                                              example : everything
 *                                          role :
 *                                              type : string
 *                                              example : everything
 *                              price :
 *                                  type : integer
 *                                  example : 78000
 *                              discount :
 *                                  type : integer
 *                                  example : 10
 *                              count :
 *                                  type : integer
 *                                  example : 125
 *                              supplier :
 *                                  type : string
 *                                  example : 64c7a63c69c2d3480160f729
 *                              colors :
 *                                  type : array
 *                                  items :
 *                                      type : string
 */

/**
 * @swagger
 *  definitions :
 *      CreateTicket :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      mainTicket :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : "64c7a63c69c2d3480160f729"
 *                              departmentID :
 *                                  type : string
 *                                  example : 64c7a63c69c2d3480160f729
 *                              departmentSubID :
 *                                  type : string
 *                                  example : 64c7a63c69c2d3480160f729
 *                              priority :
 *                                  type : number
 *                                  example : 5
 *                              title :
 *                                  type : string
 *                                  example : everything
 *                              body :
 *                                  type : string
 *                                  example : everything
 *                              user :
 *                                  type : string
 *                                  example : 64c7a63c69c2d3480160f729
 *                              answer :
 *                                  type : number
 *                                  example : 0
 *                              product :
 *                                  type : string
 *                                  example : 64c7a63c69c2d3480160f729
 *                              isAnswer :
 *                                  type : number
 *                                  example : 0
 */
/**
 * @swagger
 *  definitions :
 *      SetAnswer :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      answer :
 *                          type : object
 *                          properties :
 *                              _id :
 *                                  type : string
 *                                  example : "64c7a63c69c2d3480160f729"
 *                              departmentID :
 *                                  type : string
 *                                  example : 64c7a63c69c2d3480160f729
 *                              departmentSubID :
 *                                  type : string
 *                                  example : 64c7a63c69c2d3480160f729
 *                              priority :
 *                                  type : number
 *                                  example : 5
 *                              title :
 *                                  type : string
 *                                  example : everything
 *                              body :
 *                                  type : string
 *                                  example : everything
 *                              user :
 *                                  type : string
 *                                  example : 64c7a63c69c2d3480160f729
 *                              answer :
 *                                  type : number
 *                                  example : 0
 *                              parent :
 *                                  type : string
 *                                  example : 64c7a63c69c2d3480160f729
 *                              isAnswer :
 *                                  type : number
 *                                  example : 1
 */

/**
 * @swagger
 *  definitions :
 *      GetAnswer :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      ticket :
 *                          type : string
 *                          example : test
 *                      answer :
 *                          type : string
 *                          example : test
 */

/**
 * @swagger
 *  definitions :
 *      TicketList :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      ticketArr :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c7a63c69c2d3480160f729"
 *                                  departmentID :
 *                                      type : string
 *                                      example : پشتیبانی
 *                                  departmentSubID :
 *                                      type : string
 *                                      example : پشتیبانی محصولات
 *                                  priority :
 *                                      type : number
 *                                      example : 5
 *                                  title :
 *                                      type : string
 *                                      example : everything
 *                                  body :
 *                                      type : string
 *                                      example : everything
 *                                  user :
 *                                      type : string
 *                                      example : cyrus
 *                                  answer :
 *                                      type : number
 *                                      example : 1
 *                                  product :
 *                                      type : string
 *                                      example : test
 *                                  isAnswer :
 *                                      type : number
 *                                      example : 1
 */

/**
 * @swagger
 *  definitions :
 *      GetBookmarked :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      blogs :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c7a63c69c2d3480160f729"
 *                                  author :
 *                                      type : object
 *                                      properties :
 *                                          first_name :
 *                                              type : string
 *                                              example : everything
 *                                          last_name :
 *                                              type : string
 *                                              example : everything
 *                                          username :
 *                                              type : string
 *                                              example : everything
 *                                          role :
 *                                              type : string
 *                                              example : USER
 *                                  title :
 *                                      type : string
 *                                      example : everything
 *                                  text :
 *                                      type : string
 *                                      example : everything
 *                                  short_text :
 *                                      type : string
 *                                      example : everything
 *                                  images :
 *                                      type : array
 *                                      items :
 *                                          type : string
 *                                          example : everything
 *                                  tags :
 *                                      type : array
 *                                      items :
 *                                          type : string
 *                                          example : everything
 *                                  category :
 *                                      type : object
 *                                      properties :
 *                                          title :
 *                                              type : string
 *                                              example : everything
 *                                  likes :
 *                                      type : object
 *                                      properties :
 *                                          first_name :
 *                                              type : string
 *                                              example : everything
 *                                          last_name :
 *                                              type : string
 *                                              example : everything
 *                                          username :
 *                                              type : string
 *                                              example : everything
 *                                          role :
 *                                              type : string
 *                                              example : USER
 *                                  dislikes :
 *                                      type : object
 *                                      properties :
 *                                          first_name :
 *                                              type : string
 *                                              example : everything
 *                                          last_name :
 *                                              type : string
 *                                              example : everything
 *                                          username :
 *                                              type : string
 *                                              example : everything
 *                                          role :
 *                                              type : string
 *                                              example : USER
 *                                  bookmarks :
 *                                      type : object
 *                                      properties :
 *                                          first_name :
 *                                              type : string
 *                                              example : everything
 *                                          last_name :
 *                                              type : string
 *                                              example : everything
 *                                          username :
 *                                              type : string
 *                                              example : everything
 *                                          role :
 *                                              type : string
 *                                              example : USER
 */

/**
 * @swagger
 *  definitions :
 *      GetBookmarkedProduct :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      products :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c7a63c69c2d3480160f729"
 *                                  supplier :
 *                                      type : object
 *                                      properties :
 *                                          first_name :
 *                                              type : string
 *                                              example : everything
 *                                          last_name :
 *                                              type : string
 *                                              example : everything
 *                                          username :
 *                                              type : string
 *                                              example : everything
 *                                          role :
 *                                              type : string
 *                                              example : USER
 *                                  title :
 *                                      type : string
 *                                      example : everything
 *                                  short_title :
 *                                      type : string
 *                                      example : everything
 *                                  text :
 *                                      type : string
 *                                      example : everything
 *                                  short_text :
 *                                      type : string
 *                                      example : everything
 *                                  images :
 *                                      type : array
 *                                      items :
 *                                          type : string
 *                                          example : everything
 *                                  tags :
 *                                      type : array
 *                                      items :
 *                                          type : string
 *                                          example : everything
 *                                  category :
 *                                      type : object
 *                                      properties :
 *                                          title :
 *                                              type : string
 *                                              example : everything
 *                                  likes :
 *                                      type : object
 *                                      properties :
 *                                          first_name :
 *                                              type : string
 *                                              example : everything
 *                                          last_name :
 *                                              type : string
 *                                              example : everything
 *                                          username :
 *                                              type : string
 *                                              example : everything
 *                                          role :
 *                                              type : string
 *                                              example : USER
 *                                  dislikes :
 *                                      type : object
 *                                      properties :
 *                                          first_name :
 *                                              type : string
 *                                              example : everything
 *                                          last_name :
 *                                              type : string
 *                                              example : everything
 *                                          username :
 *                                              type : string
 *                                              example : everything
 *                                          role :
 *                                              type : string
 *                                              example : USER
 *                                  bookmarks :
 *                                      type : object
 *                                      properties :
 *                                          first_name :
 *                                              type : string
 *                                              example : everything
 *                                          last_name :
 *                                              type : string
 *                                              example : everything
 *                                          username :
 *                                              type : string
 *                                              example : everything
 *                                          role :
 *                                              type : string
 *                                              example : USER
 *                                  price :
 *                                      type : number
 *                                      example : 120000
 *                                  discount :
 *                                      type : number
 *                                      example : 10
 *                                  count :
 *                                      type : number
 *                                      example : 15
 *                                  colors :
 *                                      type : array
 *                                      items :
 *                                          type : string
 *                                          example : everything
 *                                  features :
 *                                      type : object
 *                                      properties :
 *                                          feature_detail :
 *                                              type : array
 *                                              items :
 *                                                  _id :
 *                                                      type : string
 *                                                      example : 64d5cca4e841a96c6b09a4f6
 *                                                  feature_title :
 *                                                      type : string
 *                                                      example : everything
 *                                                  feature_description :
 *                                                      type : string
 *                                                      example : everything
 */

/**
 * @swagger
 *  definitions :
 *      Basket :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      userDetail :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c7a63c69c2d3480160f729"
 *                                  supplier :
 *                                      type : string
 *                                      example : "64c7a63c69c2d3480160f729"
 *                                  title :
 *                                      type : string
 *                                      example : everything
 *                                  short_title :
 *                                      type : string
 *                                      example : everything
 *                                  text :
 *                                      type : string
 *                                      example : everything
 *                                  short_text :
 *                                      type : string
 *                                      example : everything
 *                                  images :
 *                                      type : array
 *                                      items :
 *                                          type : string
 *                                          example : everything
 *                                  tags :
 *                                      type : array
 *                                      items :
 *                                          type : string
 *                                          example : everything
 *                                  category :
 *                                      type : string
 *                                      example : "64c7a63c69c2d3480160f729"
 *                                  likes :
 *                                      type : string
 *                                      example : "64c7a63c69c2d3480160f729"
 *                                  dislikes :
 *                                      type : string
 *                                      example : "64c7a63c69c2d3480160f729"
 *                                  bookmarks :
 *                                      type : string
 *                                      example : "64c7a63c69c2d3480160f729"
 *                                  price :
 *                                      type : number
 *                                      example : 120000
 *                                  discount :
 *                                      type : number
 *                                      example : 10
 *                                  count :
 *                                      type : number
 *                                      example : 15
 *                                  colors :
 *                                      type : array
 *                                      items :
 *                                          type : string
 *                                          example : everything
 *                                  features :
 *                                      type : object
 *                                      properties :
 *                                          feature_detail :
 *                                              type : array
 *                                              items :
 *                                                  _id :
 *                                                      type : string
 *                                                      example : 64d5cca4e841a96c6b09a4f6
 *                                                  feature_title :
 *                                                      type : string
 *                                                      example : everything
 *                                                  feature_description :
 *                                                      type : string
 *                                                      example : everything
 *                                  basketCount :
 *                                      type : number
 *                                      example : 1
 *                                  totalPrice :
 *                                      type : number
 *                                      example : 120000
 *                                  finalPrice :
 *                                      type : number
 *                                      example : 115000
 *                                  payDetail :
 *                                      type : object
 *                                      properties :
 *                                           productAmount :
 *                                               type : number
 *                                               example : 115000
 *                                           paymentAmount :
 *                                               type : number
 *                                               example : 115000
 *                                           productIds :
 *                                               type : array
 *                                               items :
 *                                                  type : string
 *
 */

/**
 * @swagger
 *  definitions :
 *      AllUsers :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      users :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c7a63c69c2d3480160f729"
 *                                  mobile :
 *                                      type : string
 *                                      example : 09215957912
 *                                  otp :
 *                                      type : object
 *                                      properties :
 *                                          code :
 *                                              type : number
 *                                              example : 33195
 *                                  role :
 *                                      type : string
 *                                      example : ADMIN
 *                                  birthday :
 *                                      type : string
 *                                      example : yyyy-mm-dd
 *                                  email :
 *                                      type : string
 *                                      example : www.everything@gmail.com
 *                                  first_name :
 *                                      type : string
 *                                      example : everything
 *                                  last_name :
 *                                      type : string
 *                                      example : everything
 *                                  username :
 *                                      type : string
 *                                      example : everything
 */
