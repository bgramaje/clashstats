import { NextResponse } from "next/server";
import coc from '@/app/api/utils/coc'

/**
 * 
 * @returns welcome message for the api
 */
export async function GET(req: Request, context: any) {
    try {
        const { params } = context;
        const response = await coc.get(`v1/locations/${params.locationId}/rankings/players-builder-base`);
        return NextResponse.json({
            status: 200,
            ...response.data,
        })
    } catch (error: unknown | any) {
        return NextResponse.json({
            msg: `🚀 - ${error.message ?? ''}`,
            statusCode: 400,
        })
    }
}