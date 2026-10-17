import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './main.jsx'

describe('portfolio page', () => {
  it('renders the Japanese hero and main sections', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /アイデアを、使える体験に/ })).toBeTruthy()
    expect(screen.getByRole('navigation', { name: 'メインナビゲーション' })).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'つくったもの。' })).toBeTruthy()
    expect(screen.getByRole('heading', { name: /次のアイデア/ })).toBeTruthy()
  })

  it('shows three selected portfolio projects', () => {
    render(<App />)
    const projectTitles = [...document.querySelectorAll('.project-info h3')].map((heading) => heading.textContent)
    expect(projectTitles).toHaveLength(3)
    expect(projectTitles[0]).toContain('余白のある、')
    expect(projectTitles[1]).toContain('街の本屋を、')
    expect(projectTitles[2]).toContain('野菜からはじまる')
  })
})
