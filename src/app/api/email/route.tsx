import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return (
    NextResponse.json({
      name: 'teste get'
    })
  )
}
 
export async function POST(request: Request) {
  return (
    NextResponse
    .json({
      name: 'teste post'
    })
  )
}

export async function HEAD(request: Request) {}
  
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}