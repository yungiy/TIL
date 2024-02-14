'use client'

import revalidate from '@/utils/revalidate'
import { Button } from '@mui/material'

type Props = {
  tag: string
}

export default function RevalidateButton({ tag }: Props) {
  const handleClick = async () => {
    const res = await revalidate(tag)
  }

  return <Button variant='outlined' sx={{ m: 1 }} onClick={handleClick}>캐시 비우기</Button>
}