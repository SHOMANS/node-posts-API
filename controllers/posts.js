let data = [
  { id: "1", title: "something", body: "new new new new newww" },
  { id: "2", title: "something", body: "new new new new newww" },
  { id: "3", title: "something", body: "new new new new newww" },
  { id: "4", title: "something", body: "new new new new newww" },
];

export const getAllPosts = async (req, res) => {
  res.status(200).json({ posts: data });
};

export const getPost = async (req, res) => {
  const post = data.find((post) => post.id === req.params.id);
  if (post) {
    res.status(200).json({ post });
  } else {
    res.status(404).json({ message: "Post is not found" });
  }
};
export const createPost = async (req, res) => {
  const { title, body } = req.body;
  const id = Math.floor(Math.random() * 99999).toString();
  data.push({ title, body, id });
  res.status(201).json({ title, body, id });
};

export const updatePost = async (req, res) => {
  const post = data.find((post) => post.id === req.params.id);
  if (post) {
    const { title, body } = req.body;
    data.map((item) => {
      if (item.id === req.params.id) {
        item.title = title;
        item.body = body;
        res.status(200).json(item);
      }
    });
  } else {
    res.status(404).json({ message: "Post is not found" });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  const post = data.find((post) => post.id === id);
  if (post) {
    console.log(post);
    console.log(data.filter((item) => item.id !== id));
    data = data.filter((item) => item.id !== id);
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: "Post is not found" });
  }
};
