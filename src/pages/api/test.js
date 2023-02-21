export default async function handler(req, res) {
  const { name, summary, email, impact, privacy } = req.body;

  console.log("POST /test", {
    name,
    summary,
    email,
    impact,
    privacy,
  });

  if (email !== "arajchwald@impactnetworking.com") {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // TODO what is the corect staus code here
    res.status(200).json({
      success: false,
      errors: {
        email: "YOU ARE BREACHING IMPACT TERMS OF SERVICES, DIE TRAITOR",
      },
    });
    return;
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  res.status(200).json({ success: true });
}
