import dbConnect from "@/backend/config/dbConnect";
import { allRooms } from "@/backend/controller/roomsController";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();
router.get(allRooms);

dbConnect();

export async function GET(req: NextRequest, ctx: RequestContext) {
  return router.run(req, ctx);
}
