import edjsHTML from "editorjs-html";
import Fastify from "fastify";

async function main() {
  const edjsParser = edjsHTML();
  const fastify = Fastify({
    logger: true,
  });

  fastify.post("/", async (request) => {
    return edjsParser.parse(request.body).join("");
  });

  const start = async () => {
    try {
      await fastify.listen(80, '0.0.0.0');
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };
  start();
}

main();
