import { NextResponse } from "next/server";
import coc from '@/app/api/utils/coc'
// import axios from "axios";

// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijc4ZjQ0ZjlmLTc2YjMtNDg0MS04NmM0LTQ3ZGE1NGE3NDBlNyIsImlhdCI6MTcxMzk5Mzc5OSwic3ViIjoiZGV2ZWxvcGVyLzZmMTRlYWJhLTYyYTItMWZlMi1iZTNiLTRkYjkwNDM0NWRjYiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ1Ljc5LjIxOC43OSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.mZrCdOKxVPCX-FlkSXiga2EIlb7tVleYGlpTGvcnmmAZKDSwyF-GZqw8HHsHrxWw9vSLjm46VTMmOFr_RLv41g'
// axios.defaults.headers.common['Authorization'] =  `Bearer ${token}`// for all requests

/**
 * 
 * @returns welcome message for the api
 */
export async function GET() {
    try {
        const response = await coc.get('v1/players/%23QQQRVLV');        
        return NextResponse.json({
            msg: '🚀',
            data: response.data,
        })
    } catch (error: unknown | any) {
        return NextResponse.json({
            msg: `🚀 - ${error.message ?? ''}`,
            statusCode: 400,
        })
    }

}