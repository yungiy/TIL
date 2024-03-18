import prisma from '@/lib/db';
import { getCurrentUser } from '@/lib/session';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const user = await getCurrentUser();

  try {
    if (!user?.email) {
      return NextResponse.json(
        { message: '인증되지 않았습니다.' },
        { status: 401 }
      );
    }

    const { postId, text } = await req.json();

    const newPost = await prisma.comment.create({
      data: {
        postId,
        text,
        authorEmail: user.email,
      },
    });
    return NextResponse.json({ newPost }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: '오류가 있습니다.' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const user = await getCurrentUser();

  try {
    if (!user?.email) {
      return NextResponse.json(
        { message: '인증되지 않았습니다.' },
        { status: 401 }
      );
    }

    const { postId } = await req.json();

    const comment = await prisma.comment.findUnique({
      where: {
        id: postId,
      },
      select: {
        authorEmail: true,
      },
    });

    if (!comment || comment.authorEmail !== user.email) {
      return NextResponse.json(
        { message: '해당 댓글을 삭제할 권한이 없습니다.' },
        { status: 403 }
      );
    }

    await prisma.comment.delete({
      where: {
        id: postId,
      },
    });

    return NextResponse.json({ message: '댓글이 삭제되었습니다.' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: '오류가 발생했습니다.' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const user = await getCurrentUser();

  try {
    if (!user?.email) {
      return NextResponse.json(
        { message: '인증되지 않았습니다.' },
        { status: 401 }
      );
    }

    const { commentId, newText } = await req.json();

    const comment = await prisma.comment.findUnique({
      where: {
        id: commentId,
      },
      select: {
        authorEmail: true,
      },
    });

    if (!comment || comment.authorEmail !== user.email) {
      return NextResponse.json(
        { message: '해당 댓글을 수정할 권한이 없습니다.' },
        { status: 403 }
      );
    }

    const updatedComment = await prisma.comment.update({
      where: {
        id: commentId,
      },
      data: {
        text: newText,
      },
    });

    return NextResponse.json({ updatedComment }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: '오류가 발생했습니다.' }, { status: 500 });
  }
}
