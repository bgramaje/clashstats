import { NextResponse } from 'next/server';
import coc from '@/app/api/utils/coc';

/**
 *
 * @returns welcome message for the api
 */
export async function GET(req: Request, context: any) {
  try {
    const { params } = context;

    if (!params.locationId) {
      return NextResponse.json({
        status: 200,
        items: [],
      });
    }

    const response = await coc.get(`v1/locations/${params.locationId}/rankings/players`);
    const { status } = response;
    if (status === 200) {
      return NextResponse.json({
        status,
        ...response.data,
      });
    }
    return NextResponse.json({
      status,
      response,
    });
  } catch (error: unknown | any) {
    return NextResponse.json({
      msg: `🚀 - ${error.message ?? ''}`,
      statusCode: 400,
    });
  }
}
