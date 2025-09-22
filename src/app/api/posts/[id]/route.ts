import { NextRequest, NextResponse } from 'next/server'
import { deletePost } from '@/lib/supabase/queries'
import { revalidatePath } from 'next/cache'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const postId = params.id
    
    if (!postId) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      )
    }

    const result = await deletePost(postId)
    
    if (result.success) {
      // Revalidate the relevant pages
      revalidatePath('/hhhghghgwangik4167/manage')
      revalidatePath('/hhhghghgwangik4167/posts')
      revalidatePath('/blog')
      
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: result.error || 'Failed to delete post' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
