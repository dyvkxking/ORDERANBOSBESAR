import { NextRequest, NextResponse } from 'next/server'
import { toggleFeaturedStatus } from '@/lib/supabase/queries'
import { revalidatePath } from 'next/cache'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const postId = params.id
    const { featured } = await request.json()
    
    if (!postId) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      )
    }

    if (typeof featured !== 'boolean') {
      return NextResponse.json(
        { error: 'Featured status must be a boolean' },
        { status: 400 }
      )
    }

    const result = await toggleFeaturedStatus(postId, !featured)
    
    if (result.success) {
      // Revalidate the relevant pages
      revalidatePath('/hhhghghgwangik4167/manage')
      revalidatePath('/hhhghghgwangik4167/analytics')
      revalidatePath('/blog')
      revalidatePath('/')
      
      return NextResponse.json({ success: true, data: result.data })
    } else {
      return NextResponse.json(
        { error: result.error || 'Failed to update featured status' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error updating featured status:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
