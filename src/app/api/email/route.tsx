import { send } from "@/firebase/db/email";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  return (
    NextResponse.json(
      send(await req.json())
                    .then(() => 'sucesso')
                    .catch(() => 'falha ao enviar')
    )
  )
}

export async function GET(req: NextRequest, res: NextResponse) {}

export async function HEAD(req: NextRequest, res: NextResponse) {}
  
export async function PUT(req: NextRequest, res: NextResponse) {}
 
export async function DELETE(req: NextRequest, res: NextResponse) {}
 
export async function PATCH(req: NextRequest, res: NextResponse) {}
