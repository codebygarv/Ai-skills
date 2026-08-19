# Example: Terraform IaC Auditor

## Input

> "Review this Terraform S3 bucket resource:
> resource "aws_s3_bucket" "data" {
>   bucket = "my-company-data"
> }"

## Output

### Security Findings
1. **Unencrypted Storage**: Missing default KMS encryption.
2. **Public Exposure Risk**: Missing Public Access Block.
3. **Accidental Deletion**: Missing versioning and deletion protection.

### Hardened Terraform Code
```hcl
resource "aws_s3_bucket" "data" {
  bucket = var.bucket_name

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_s3_bucket_versioning" "data" {
  bucket = aws_s3_bucket.data.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "data" {
  bucket = aws_s3_bucket.data.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "data" {
  bucket                  = aws_s3_bucket.data.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
```
