import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  body?: object;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // Assuming you're receiving a POST request with JSON payload
  console.log("req: ", req.body);
  const { hotkey } = req.body;

  if (hotkey === 'duplicateHotkey') {
    res.status(409).json({
      success: false,
      error: "Miner is duplicated. Please try again"
    });
  } else {
    res.status(200).json({
      success: true
    });
  }
}