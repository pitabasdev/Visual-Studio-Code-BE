const { c, python, cpp, java, node } = require("compile-run");

const compileCode = async (req, res) => {
  try {
    const { lang, code, input } = req.body;
    let resultPromise;

    switch (lang) {
      case "python":
        resultPromise = python.runSource(code, { stdin: input });
        break;
      case "cpp":
        resultPromise = cpp.runSource(code, { stdin: input });
        break;
      case "c":
        resultPromise = c.runSource(code, { stdin: input });
        break;
      case "java":
        resultPromise = java.runSource(code, { stdin: input });
        break;
      case "javascript":
        resultPromise = node.runSource(code, { stdin: input });
        break;
      default:
        return res.status(400).send("Unsupported language");
    }

    const result = await resultPromise;
    return res.send(result);
  } catch (error) {
    console.error("Error during compilation:", error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = compileCode;
