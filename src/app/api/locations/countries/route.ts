import { NextResponse } from "next/server";
import coc from '@/app/api/utils/coc'

/**
 * 
 * @returns welcome message for the api
 */
export async function GET() {
    try {
        const response = await coc.get('v1/locations');
        const countries = response.data.items
            .map((loc: any) => loc.isCountry && loc)
            .filter((loc: any) => loc);

        return NextResponse.json({
            status: 200,
            items: countries
        })
    } catch (error: unknown | any) {
        return NextResponse.json({
            msg: `🚀 - ${error.message ?? ''}`,
            statusCode: 400,
        })
    }
}