import {createClient} from '@supabase/supabase-js';


const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQ2NTg1OCwiZXhwIjoxOTU1MDQxODU4fQ.17Y8FRZbg32y43utcnfRXE8ST9nwfcEdAbvrOBR2c8c'

const SUPABASE_URL = "https://jrjwjtbvvssuyecgmyuk.supabase.co"

const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);


    