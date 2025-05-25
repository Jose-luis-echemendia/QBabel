from pathlib import Path
from django.core.management.base import BaseCommand
import os


class Command(BaseCommand):
    help = "Set or update the DATABASE_URL in the .env file."
    
    def add_arguments(self, parser):
        parser.add_argument('--user', type=str, required=True, help='Database username')
        parser.add_argument('--password', type=str, required=True, help='Database password')
        parser.add_argument('--host', type=str, default='localhost', help='Database host (default: localhost)')
        parser.add_argument('--port', type=str, default='5432', help='Database port (default: 5432)')
        parser.add_argument('--name', type=str, required=True, help='Database name')
        parser.add_argument('--env', type=str, default='.env', help='Path to .env file (default: .env in root)')


    def handle(self, *args, **options):
        env_path = Path(__file__).resolve().parent.parent.parent.parent.parent / "core" / "settings" / ".env"
        db_url = (
            f"DATABASE_URL=postgresql://{options['user']}:{options['password']}"
            f"@{options['host']}:{options['port']}/{options['name']}"
        )

        # Si el archivo no existe, lo crea con la línea
        if not os.path.exists(env_path):
            with open(env_path, "w") as f:
                f.write(db_url + "\n")
            self.stdout.write(self.style.SUCCESS(f".env created with DATABASE_URL."))
            return

        # Si ya existe, revisamos si hay que actualizar o agregar
        updated = False
        lines = []
        with open(env_path, "r") as f:
            for line in f:
                if line.startswith("DATABASE_URL="):
                    lines.append(db_url + "\n")
                    updated = True
                else:
                    lines.append(line)

        if not updated:
            lines.append(db_url + "\n")

        with open(env_path, "w") as f:
            f.writelines(lines)

        msg = (
            "DATABASE_URL updated in .env."
            if updated
            else "DATABASE_URL added to .env."
        )
        self.stdout.write(self.style.SUCCESS(msg))
