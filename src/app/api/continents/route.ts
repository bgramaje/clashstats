import { NextResponse } from "next/server";
import coc from '@/app/api/utils/coc'

/**
 * 
 * @returns welcome message for the api
 */
export async function GET() {
    try {
        const response = await coc.get('v1/locations');        
        const data = response.data.items.filter((c: any) => !c.isCountry && c.name !== "");
        return NextResponse.json({
            status: 200,
            data,
        })
    } catch (error: unknown | any) {
        return NextResponse.json({
            msg: `🚀 - ${error.message ?? ''}`,
            statusCode: 400,
        })
    }
}