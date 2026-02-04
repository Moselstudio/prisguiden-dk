export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          parent_id: string | null
          icon: string | null
          sort_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          parent_id?: string | null
          icon?: string | null
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          parent_id?: string | null
          icon?: string | null
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      retailers: {
        Row: {
          id: string
          name: string
          slug: string
          website_url: string
          logo_url: string | null
          description: string | null
          is_active: boolean
          affiliate_program: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          website_url: string
          logo_url?: string | null
          description?: string | null
          is_active?: boolean
          affiliate_program?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          website_url?: string
          logo_url?: string | null
          description?: string | null
          is_active?: boolean
          affiliate_program?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          brand: string | null
          category_id: string | null
          image_url: string | null
          images: string[] | null
          specifications: Json
          ean: string | null
          is_active: boolean
          lowest_price: number | null
          highest_price: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          brand?: string | null
          category_id?: string | null
          image_url?: string | null
          images?: string[] | null
          specifications?: Json
          ean?: string | null
          is_active?: boolean
          lowest_price?: number | null
          highest_price?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          brand?: string | null
          category_id?: string | null
          image_url?: string | null
          images?: string[] | null
          specifications?: Json
          ean?: string | null
          is_active?: boolean
          lowest_price?: number | null
          highest_price?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      prices: {
        Row: {
          id: string
          product_id: string
          retailer_id: string
          price: number
          currency: string
          product_url: string
          shipping_cost: number
          in_stock: boolean
          last_checked_at: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          product_id: string
          retailer_id: string
          price: number
          currency?: string
          product_url: string
          shipping_cost?: number
          in_stock?: boolean
          last_checked_at?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          retailer_id?: string
          price?: number
          currency?: string
          product_url?: string
          shipping_cost?: number
          in_stock?: boolean
          last_checked_at?: string
          created_at?: string
          updated_at?: string
        }
      }
      price_history: {
        Row: {
          id: string
          product_id: string
          retailer_id: string
          price: number
          recorded_at: string
        }
        Insert: {
          id?: string
          product_id: string
          retailer_id: string
          price: number
          recorded_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          retailer_id?: string
          price?: number
          recorded_at?: string
        }
      }
      user_profiles: {
        Row: {
          id: string
          display_name: string | null
          avatar_url: string | null
          email_notifications: boolean
          push_notifications: boolean
          is_premium: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          display_name?: string | null
          avatar_url?: string | null
          email_notifications?: boolean
          push_notifications?: boolean
          is_premium?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          display_name?: string | null
          avatar_url?: string | null
          email_notifications?: boolean
          push_notifications?: boolean
          is_premium?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      price_alerts: {
        Row: {
          id: string
          user_id: string
          product_id: string
          target_price: number
          is_active: boolean
          triggered_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          target_price: number
          is_active?: boolean
          triggered_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          target_price?: number
          is_active?: boolean
          triggered_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      saved_products: {
        Row: {
          id: string
          user_id: string
          product_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          created_at?: string
        }
      }
      product_lists: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          is_public: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          is_public?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          is_public?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      product_list_items: {
        Row: {
          id: string
          list_id: string
          product_id: string
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          list_id: string
          product_id: string
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          list_id?: string
          product_id?: string
          notes?: string | null
          created_at?: string
        }
      }
      search_history: {
        Row: {
          id: string
          user_id: string
          query: string
          results_count: number | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          query: string
          results_count?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          query?: string
          results_count?: number | null
          created_at?: string
        }
      }
      guides: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string | null
          cover_image: string | null
          category_id: string | null
          author: string | null
          is_published: boolean
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          content?: string | null
          cover_image?: string | null
          category_id?: string | null
          author?: string | null
          is_published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string | null
          content?: string | null
          cover_image?: string | null
          category_id?: string | null
          author?: string | null
          is_published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      product_reviews: {
        Row: {
          id: string
          product_id: string
          user_id: string
          rating: number
          title: string | null
          content: string | null
          is_verified_purchase: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          product_id: string
          user_id: string
          rating: number
          title?: string | null
          content?: string | null
          is_verified_purchase?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          user_id?: string
          rating?: number
          title?: string | null
          content?: string | null
          is_verified_purchase?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
