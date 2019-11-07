const Product = require("../../../domain/db/schemas/product");

const getProduct = (request, response) => {
  const slug = request.params.slug;

  const sendResponse = product => {
    response.set("Content-type", "application/json");
    response.status(200);
    response.json({ status: "success", product });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: "product was not found"
    });
  };

  const findProduct = Product.findOne({ slug: slug });

  findProduct.then(sendResponse).catch(sendError);
};

module.exports = getProduct;