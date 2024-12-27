import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/question/${id}` || ""
    );
    console.log(res.data);
    return NextResponse.json(res.data.data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
