'use client'

import React from 'react'
import { Construction } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const Notcreated = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <Card className="max-w-md w-full text-center py-10">
        <CardContent className="flex flex-col items-center gap-4">
          <Construction className="h-12 w-12 text-primary" />
          <h2 className="text-2xl font-semibold">Страница в разработке</h2>
          <p className="text-muted-foreground text-sm">
            Мы работаем над этой страницей. Скоро она будет доступна.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Notcreated
