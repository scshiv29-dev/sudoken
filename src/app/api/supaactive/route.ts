import { NextResponse } from "next/server";

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.SUPABASE_URL as string, process.env.SUPABASE_SERVICE_ROLE_KEY as string)
export async function POST(req: Request) {

    const { data, error } = await supabase
    .from('keepsupaalive')
    .select()
    console.log(data)
}