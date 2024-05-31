'use server';

/* export async function deleteArticle(id: number) {
  try {
    const article = await prisma.article.findUnique({ where: { id } });
    if (!article) {
      return {
        errors: 'Article not found.'
      };
    }

    // Then delete the article
    await prisma.articleCategory.deleteMany({
      where: { articleId: id }
    });

    await prisma.article.delete({
      where: { id: id }
    });

    revalidatePath('/admin/articles');
    revalidatePath('/blog');
    return {
      errors: null,
      message: 'success'
    };
  } catch (e) {
    console.error((e as Error).message);
    return { errors: 'Something went wrong. Please try again later.' };
  }
}

 */